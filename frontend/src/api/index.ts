import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import { getAccessToken } from "../utils/getAccessToken";

export interface List<D> {
  data: {
    data: D[];
    paginationInfo: {
      total: number;
      page: number;
      limit: number;
    };
  };
  status_code: number;
  error_message: string;
}

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<AxiosRequestConfig, any, { data: any; status?: number }> =>
  async (configs) => {
    try {
      const newConfig = {
        ...configs,
        // headers: {
        //   Authorization: `Bearer ${getAccessToken()}`,
        // },
        params: {
          ...configs.params,
        },
      };
      const result = await axios(newConfig);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };

const baseQuery = axiosBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_HOST ?? "",
});

export const api = createApi({
  baseQuery: baseQuery,
  reducerPath: "api",
  tagTypes: ["Auth"],
  endpoints: () => ({}),
});
