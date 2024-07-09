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
    createGroup: build.mutation<
      IGroup,
      { users: number[]; name: string; avatar: string | null }
    >({
      query: (data) => ({
        url: `/groups`,
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "Group", id: "SEARCH" }],
    }),
  }),
});

export const { useSearchGroupsQuery, useCreateGroupMutation } = groupsApi;
