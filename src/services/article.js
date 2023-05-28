import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { BASE_URL, RAPID_API_KEY, RAPID_API_HOST } from "../constants";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", RAPID_API_HOST);

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  }),
});

export const {
  useLazyGetSummaryQuery,
} = articleApi