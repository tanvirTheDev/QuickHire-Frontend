"use client";

import { useMemo } from "react";
import CreateJobForm from "@/components/admin/CreateJobForm";
import AdminJobTable from "@/components/admin/AdminJobTable";
import ApplicationForm from "@/components/application/ApplicationForm";
import {
  useCreateJobMutation,
  useDeleteJobMutation,
  useGetJobsQuery,
} from "@/store/api/jobsApi";
import { useGetAllApplicationsQuery } from "@/store/api/applicationsApi";
import type { CreateJobPayload } from "@/types";
import { useToast } from "@/hooks/useToast";

export default function AdminPage() {
  const { toast } = useToast();
  const filters = useMemo(() => ({ page: 1, limit: 20 }), []);
  const { data, isLoading, isError } = useGetJobsQuery(filters);
  const jobs = data?.data.jobs ?? [];
  const {
    data: applicationsResponse,
    isLoading: isApplicationsLoading,
    isError: isApplicationsError,
  } = useGetAllApplicationsQuery();
  const applications = applicationsResponse?.data ?? [];

  const [createJob, { isLoading: isCreating }] = useCreateJobMutation();
  const [deleteJob, { isLoading: isDeleting }] = useDeleteJobMutation();

  const handleCreateJob = async (payload: CreateJobPayload) => {
    await createJob(payload).unwrap();
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJob(id).unwrap();
      toast.success("Job deleted successfully.");
    } catch (_error) {
      toast.error("Failed to delete job.");
    }
  };

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <CreateJobForm isSubmitting={isCreating} onCreateJob={handleCreateJob} />
        <AdminJobTable
          jobs={jobs}
          isLoading={isLoading}
          isError={isError}
          isDeleting={isDeleting}
          onDelete={handleDelete}
        />
        <ApplicationForm
          applications={applications}
          isLoading={isApplicationsLoading}
          isError={isApplicationsError}
        />
      </div>
    </section>
  );
}
