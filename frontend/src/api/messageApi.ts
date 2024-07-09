import { api } from ".";
import { createAction } from "@reduxjs/toolkit";
import { IMessage } from "../interfaces/messages";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const messagesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMessageInConvertation: build.query<
      {
        user_id_1: number;
        user_id_2: number;
        offset: number;
        limit: number;
        data: IMessage[];
      },
      {
        user_id_1: number;
        user_id_2: number | null | undefined;
        offset: number;
        group_id: number | null | undefined;
      }
    >({
      query: ({ user_id_1, user_id_2, group_id, offset }) => ({
        url: `/messages?user_id_1=${user_id_1}&user_id_2=${user_id_2}&offset=${offset}&group_id=${group_id}`,
        method: "GET",
      }),
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetMessageInConvertationQuery } = messagesApi;
