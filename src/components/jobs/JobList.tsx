"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/ui/Pagination";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import { useGetJobsQuery } from "@/store/api/jobsApi";
import { useDebounce } from "@/hooks/useDebounce";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import JobFilters from "./JobFilters";
import StartPosting from "@/components/home/StartPosting";

export default function JobList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 350);
  const debouncedLocation = useDebounce(location, 350);

  const query = useMemo(
    () => ({
      search: debouncedSearch || undefined,
      category: category || undefined,
      type: type || undefined,
      location: debouncedLocation || undefined,
      page,
      limit: 8,
    }),
    [debouncedSearch, category, type, debouncedLocation, page]
  );

  const { data, isLoading, isFetching, isError } = useGetJobsQuery(query);
  const jobs = data?.data.jobs ?? [];
  const meta = data?.data.meta;

  return (
    <>
      <section className="bg-white pb-10 pt-8 sm:pt-10">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
          <div className="space-y-4 rounded-sm border border-border bg-white p-4 sm:p-5">
            <SearchBar
              value={search}
              onChange={(value) => {
                setSearch(value);
                setPage(1);
              }}
            />
            <JobFilters
              category={category}
              type={type}
              location={location}
              onCategoryChange={(value) => {
                setCategory(value);
                setPage(1);
              }}
              onTypeChange={(value) => {
                setType(value);
                setPage(1);
              }}
              onLocationChange={(value) => {
                setLocation(value);
                setPage(1);
              }}
            />
          </div>

          <div className="mt-8">
            {isLoading ? (
              <div className="flex min-h-[220px] items-center justify-center">
                <Spinner />
              </div>
            ) : isError ? (
              <EmptyState
                title="Unable to load jobs"
                description="Please refresh and try again."
              />
            ) : jobs.length === 0 ? (
              <EmptyState
                title="No jobs found"
                description="Try changing your search keywords or filters."
              />
            ) : (
              <>
                {isFetching ? (
                  <div className="mb-3 flex justify-end">
                    <Spinner size="sm" />
                  </div>
                ) : null}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
                {meta ? (
                  <Pagination
                    className="mt-8"
                    currentPage={meta.page}
                    totalPages={meta.totalPages}
                    onPageChange={setPage}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
      </section>
      <StartPosting />
    </>
  );
}
