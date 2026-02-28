"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import JobCard from "./JobCard";
import { useGetFeaturedJobsQuery } from "@/store/api/jobsApi";
import type { Job } from "@/types";

const fallbackFeaturedJobs: Job[] = [
  {
    _id: "featured-1",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    category: "Marketing",
    type: "Full-time",
    salary: "",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    category: "Design",
    type: "Full-time",
    salary: "",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-3",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    category: "Marketing",
    type: "Full-time",
    salary: "",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-4",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    category: "Design",
    type: "Full-time",
    salary: "",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-5",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    category: "Marketing",
    type: "Full-time",
    salary: "",
    description: "ClassPass is looking for Product Designer to help us...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-6",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    category: "Design",
    type: "Full-time",
    salary: "",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-7",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    category: "Marketing",
    type: "Full-time",
    salary: "",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-8",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    category: "Other",
    type: "Full-time",
    salary: "",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    requirements: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function FeaturedJobs() {
  const { data, isLoading } = useGetFeaturedJobsQuery({ limit: 8 });
  const jobs =
    data?.data && data.data.length > 0 ? data.data : fallbackFeaturedJobs;

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

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {(isLoading ? fallbackFeaturedJobs : jobs).map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
