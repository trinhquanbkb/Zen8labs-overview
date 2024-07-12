import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const notificationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendNotification: build.mutation<
      any,
      {
        notification: {
          body: string;
          title: string;
        };
      }
    >({
      query: (data) => ({
        url: `/notifications/send-notification`,
        method: "POST",
        data,
      }),
    }),
    setTokenFCM: build.mutation<any, { token_fcm: string }>({
      query: (data) => ({
        url: `/notifications/set-token-fcm`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useSetTokenFCMMutation, useSendNotificationMutation } =
  notificationsApi;
