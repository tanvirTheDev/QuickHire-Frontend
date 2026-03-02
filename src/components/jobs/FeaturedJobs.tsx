"use client";

import EmptyState from "@/components/ui/EmptyState";
import Spinner from "@/components/ui/Spinner";
import { useGetJobsQuery } from "@/store/api/jobsApi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import JobCard from "./JobCard";

export default function FeaturedJobs() {
  const { data, isLoading, isError } = useGetJobsQuery({ limit: 8 });
  const jobs = data?.data.jobs ?? [];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-[124px] lg:pb-[72px] lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-text-primary sm:text-[42px] lg:text-[48px]">
            Featured <span className="text-primary">jobs</span>
          </h2>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-4 font-body text-base font-semibold leading-[1.6] text-primary"
          >
            Show all jobs
            <Image
              src="/title-arrow-right.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
            />
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="mt-12 flex min-h-[220px] items-center justify-center">
            <Spinner />
          </div>
        ) : isError ? (
          <div className="mt-10">
            <EmptyState
              title="Unable to load featured jobs"
              description="Please refresh and try again."
            />
          </div>
        ) : jobs.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title="No featured jobs available"
              description="Add jobs from admin to see them here."
            />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
