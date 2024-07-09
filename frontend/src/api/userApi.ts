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
      providesTags: [{ type: "User", id: "LIST" }],
    }),
    searchUsers: build.query<IUser[], { keyword: string }>({
      query: ({ keyword }) => ({
        url: `/users/search?keyword=${keyword}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [{ type: "User", id: "SEARCH" }],
    }),
    getDetailUser: build.query<IUser, { id: number | null }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [{ type: "User", id: "DETAIL" }],
    }),
    updateUser: build.mutation<
      IUser,
      {
        id: number;
        first_name: string;
        last_name: string;
        nick_name: string;
        email: string;
        phone: string;
        address: string;
        avatar: string;
        dob: string;
        about: string;
      }
    >({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: [
        { type: "User", id: "LIST" },
        { type: "User", id: "DETAIL" },
        { type: "User", id: "SEARCH" },
      ],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetDetailUserQuery,
  useSearchUsersQuery,
  useUpdateUserMutation,
} = categoriesApi;
