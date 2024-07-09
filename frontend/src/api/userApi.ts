import { api } from ".";
import { createAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/users";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    searchUsers: build.query<IUser[], { keyword: string }>({
      query: ({ keyword }) => ({
        url: `/users/search?keyword=${keyword}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getDetailUser: build.query<IUser, { id: number | null }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetDetailUserQuery,
  useSearchUsersQuery,
} = categoriesApi;
