// services/eventsApi/eventsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://en.wikipedia.org/api/rest_v1/' }),
  endpoints: (builder) => ({
    getEvents: builder.query<any, { month: number; day: number }>({
      query: ({ month, day }) => `feed/onthisday/events/${month}/${day}`,
    }),
  }),
});

export const { useLazyGetEventsQuery } = eventsApi;
