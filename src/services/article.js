import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (builder) => ({
        getSummary: builder.query({
            getSummary: builder.query({
                query: (params) => 'test'
            })
        })
    })
});