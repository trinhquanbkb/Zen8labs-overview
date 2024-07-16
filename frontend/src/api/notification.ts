import { api } from ".";
import { createAction } from "@reduxjs/toolkit";
import { INotification } from "../interfaces/notification";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const notificationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getListNotification: build.query<INotification[], any>({
      query: () => ({
        url: `/notifications/notification-own`,
        method: "GET",
      }),
    }),
    sendNotification: build.mutation<
      any,
      {
        notification: {
          content: string;
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

export const {
  useSetTokenFCMMutation,
  useSendNotificationMutation,
  useGetListNotificationQuery,
} = notificationsApi;
