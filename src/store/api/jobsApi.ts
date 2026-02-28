import { baseApi } from "./baseApi";
import type {
  ApiResponse,
  CreateJobPayload,
  Job,
  JobFilters,
  PaginationMeta,
} from "@/types";

interface JobsResponse {
  jobs: Job[];
  meta: PaginationMeta;
}

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query<{ data: JobsResponse }, JobFilters>({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.search) params.set("search", filters.search);
        if (filters.category) params.set("category", filters.category);
        if (filters.location) params.set("location", filters.location);
        if (filters.type) params.set("type", filters.type);
        if (filters.page) params.set("page", String(filters.page));
        if (filters.limit) params.set("limit", String(filters.limit));

        return { url: `/jobs?${params.toString()}` };
      },
      transformResponse: (response: ApiResponse<Job[]>) => ({
        data: {
          jobs: response.data,
          meta: response.meta || {
            total: response.data.length,
            page: 1,
            limit: response.data.length,
            totalPages: 1,
          },
        },
      }),
      providesTags: (result) =>
        result?.data.jobs
          ? [
              ...result.data.jobs.map(({ _id }) => ({ type: "Job" as const, id: _id })),
              { type: "Job" as const, id: "LIST" },
            ]
          : [{ type: "Job" as const, id: "LIST" }],
    }),

    getJobById: builder.query<{ data: Job }, string>({
      query: (id) => `/jobs/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Job", id }],
    }),

    createJob: builder.mutation<{ data: Job }, CreateJobPayload>({
      query: (payload) => ({
        url: "/jobs",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Job", id: "LIST" }],
    }),

    updateJob: builder.mutation<
      { data: Job },
      { id: string; payload: Partial<CreateJobPayload> }
    >({
      query: ({ id, payload }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Job", id },
        { type: "Job", id: "LIST" },
      ],
    }),

    deleteJob: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: ApiResponse<unknown>) => ({
        message: response.message,
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Job", id },
        { type: "Job", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobsApi;
