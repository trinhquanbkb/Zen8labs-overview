import { api } from ".";
import { createAction } from "@reduxjs/toolkit";
import { IMessage } from "../interfaces/messages";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const messagesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMessageInConversation: build.query<
      {
        user_id_1: number;
        user_id_2: number;
        offset: number;
        limit: number;
        data: IMessage[];
      },
      { user_id_1: number; user_id_2: number; offset: number }
    >({
      query: (query) => ({
        url: `/messages?user_id_1=${query.user_id_1}&user_id_2=${query.user_id_2}&offset=${query.offset}`,
        method: "GET",
      }),
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetMessageInConversationQuery } = messagesApi;
