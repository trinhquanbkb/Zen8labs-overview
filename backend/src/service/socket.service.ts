import { Server, Socket } from "socket.io";
import { ISocketData } from "../interface/socket";
import { createServer, Server as HTTPServer } from "node:http";
import { conversationService } from "./conversation.service";
import { messageService } from "./message.service";

export const initSocket = (app: Express.Application): HTTPServer => {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    // join conversation
    socket.on("joinRoom", async (room) => {
      console.log(room);
      socket.join(room);
    });

    socket.on("sendDataClient", async function (data: ISocketData) {
      // check conversation
      const conversation =
        await conversationService.getDetailConversationWithUserId(
          data.receiver_id
        );
      if (conversation) {
        // create new message
        await messageService.createMessage({
          content: data.message,
          user_id: data.sender_id,
          conversation_id: conversation.dataValues.id,
        });
        // receive to conversation
        socket.to(conversation.dataValues.id).emit("sendDataServer", {
          receiver_id: data.receiver_id,
          message: data.message,
        });
      } else {
        // create new conversation
        const newConversation = await conversationService.createConversation({
          user_one: data.sender_id,
          user_two: data.receiver_id,
        });
        // create new message
        await messageService.createMessage({
          content: data.message,
          user_id: data.sender_id,
          conversation_id: newConversation.dataValues.id,
        });
        // receive to conversation
        socket.to(newConversation.dataValues.id).emit("sendDataServer", {
          receiver_id: data.receiver_id,
          message: data.message,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return server;
};
