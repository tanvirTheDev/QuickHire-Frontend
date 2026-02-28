import { baseApi } from "./baseApi";
import type { Application, CreateApplicationPayload } from "@/types";

export const applicationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitApplication: builder.mutation<{ data: Application }, CreateApplicationPayload>({
      query: (payload) => ({
        url: "/applications",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Application", id: "LIST" }],
    }),

    getAllApplications: builder.query<{ data: Application[] }, void>({
      query: () => "/applications",
      providesTags: [{ type: "Application", id: "LIST" }],
    }),

    getApplicationById: builder.query<{ data: Application }, string>({
      query: (id) => `/applications/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Application", id }],
    }),

    getApplicationsByJobId: builder.query<{ data: Application[] }, string>({
      query: (jobId) => `/applications/job/${jobId}`,
      providesTags: (_result, _error, jobId) => [
        { type: "Application", id: `job-${jobId}` },
      ],
    }),
  }),
});

export const {
  useSubmitApplicationMutation,
  useGetAllApplicationsQuery,
  useGetApplicationByIdQuery,
  useGetApplicationsByJobIdQuery,
} = applicationsApi;
