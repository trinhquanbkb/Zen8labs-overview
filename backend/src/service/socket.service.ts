import { Server, Socket } from "socket.io";
import { ISocketData } from "../interface/socket";
import { createServer, Server as HTTPServer } from "node:http";
import { convertationService } from "./convertation.service";
import { messageService } from "./message.service";
import { UserService } from "./user.service";

const initSocket = (app: Express.Application): HTTPServer => {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    // user connect
    socket.on("userOnline", async (userId) => {
      await UserService.updateUser({ socket: socket.id }, { id: userId });
      const users = await UserService.getListUserOnline();
      io.emit("sendOnlineAccount", users);
    });

    // join convertation
    socket.on("joinRoom", async (room) => {
      socket.join(room);
    });

    socket.on("sendDataClient", async function (data: ISocketData) {
      // check convertation
      const convertation =
        await convertationService.getDetailConvertationWithUserId(
          data.receiver_id,
          data.sender_id
        );
      if (convertation) {
        // create new message
        const newMess = await messageService.createMessage({
          content: data.message,
          user_id: data.sender_id,
          convertation_id: convertation.dataValues.id,
        });
        // receive to convertation
        socket.to(convertation.dataValues.id).emit("sendDataServer", {
          receiver_id: data.receiver_id,
          message: data.message,
          created_at: newMess.created_at,
          updated_at: newMess.updated_at,
        });
      } else {
        // create new convertation
        const newConvertation = await convertationService.createConvertation({
          user_one: data.sender_id,
          user_two: data.receiver_id,
        });
        // create new message
        const newMess = await messageService.createMessage({
          content: data.message,
          user_id: data.sender_id,
          convertation_id: newConvertation.dataValues.id,
        });
        // receive to convertation
        socket.to(newConvertation.dataValues.id).emit("sendDataServer", {
          receiver_id: data.receiver_id,
          message: data.message,
          created_at: newMess.created_at,
          updated_at: newMess.updated_at,
        });
      }
    });

    socket.on("disconnect", async () => {
      await UserService.updateUser({ socket: "" }, { socket: socket.id });
      const users = await UserService.getListUserOnline();
      io.emit("sendOfflineAccount", users);
    });
  });

  return server;
};

export const SocketService = { initSocket };
