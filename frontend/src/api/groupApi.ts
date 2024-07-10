import { api } from ".";
import { createAction } from "@reduxjs/toolkit";
import { IGroup } from "../interfaces/group";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const groupsApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchGroups: build.query<IGroup[], { keyword: string }>({
      query: ({ keyword }) => ({
        url: `/groups/search?keyword=${keyword}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [{ type: "Group", id: "SEARCH" }],
    }),
    getDetailGroup: build.query<IGroup, { id: number }>({
      query: ({ id }) => ({
        url: `/groups/${id}`,
        method: "GET",
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [{ type: "Group", id: "DETAIL" }],
    }),
    createGroup: build.mutation<
      IGroup,
      { users: number[]; name: string; avatar: string | null }
    >({
      query: (data) => ({
        url: `/groups`,
        method: "POST",
        data,
      }),
      invalidatesTags: [
        { type: "Group", id: "SEARCH" },
        { type: "Group", id: "DETAIL" },
      ],
    }),
    updateGroup: build.mutation<
      any,
      {
        id: number;
        name?: string;
        userId?: number[];
        avatar?: string;
        is_delete?: boolean;
      }
    >({
      query: ({ id, ...data }) => ({
        url: `/groups/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: [
        { type: "Group", id: "SEARCH" },
        { type: "Group", id: "DETAIL" },
      ],
    }),
    deleteGroup: build.mutation<any, { id: number }>({
      query: ({ id }) => ({
        url: `/groups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Group", id: "SEARCH" },
        { type: "Group", id: "DETAIL" },
      ],
    }),
  }),
});

export const {
  useSearchGroupsQuery,
  useCreateGroupMutation,
  useGetDetailGroupQuery,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
} = groupsApi;
