"use client";

import { useGetJobByIdQuery } from "@/store/api/jobsApi";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";

interface JobDetailProps {
  jobId: string;
}

export default function JobDetail({ jobId }: JobDetailProps) {
  const { data, isLoading, isError } = useGetJobByIdQuery(jobId, {
    skip: !jobId,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[220px] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <EmptyState
        title="Job not found"
        description="This job might be removed or unavailable."
      />
    );
  }

  const job = data.data;

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-6">
        <div className="rounded-sm border border-border bg-white p-6 sm:p-8">
          <h1 className="font-display text-[32px] font-semibold leading-[1.1] text-text-primary sm:text-[40px]">
            {job.title}
          </h1>
          <p className="mt-2 font-body text-base text-text-secondary">
            {job.company} <span className="px-1 text-text-muted">•</span> {job.location}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              {job.type}
            </span>
            <span className="inline-flex rounded-full bg-[#D6F6E4] px-4 py-1 text-sm font-semibold text-[#56CDAD]">
              {job.category}
            </span>
            {job.salary ? (
              <span className="inline-flex rounded-full bg-[#E9EBFD] px-4 py-1 text-sm font-semibold text-primary">
                {job.salary}
              </span>
            ) : null}
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-primary">
                Job Description
              </h2>
              <p className="mt-2 whitespace-pre-wrap font-body text-base leading-[1.7] text-text-muted">
                {job.description}
              </p>
            </div>

            {job.requirements ? (
              <div>
                <h2 className="font-display text-2xl font-semibold text-text-primary">
                  Requirements
                </h2>
                <p className="mt-2 whitespace-pre-wrap font-body text-base leading-[1.7] text-text-muted">
                  {job.requirements}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
