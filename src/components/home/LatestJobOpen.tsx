"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type LatestJobItem = {
  id: string;
  title: string;
  company: string;
  location: string;
};

const jobs: LatestJobItem[] = [
  {
    id: "latest-1",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
  },
  {
    id: "latest-2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
  },
  {
    id: "latest-3",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
  },
  {
    id: "latest-4",
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
  },
  {
    id: "latest-5",
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
  },
  {
    id: "latest-6",
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
  },
  {
    id: "latest-7",
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
  },
  {
    id: "latest-8",
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
  },
];

const brandStyles: Record<string, string> = {
  Nomad: "bg-[#56CDAD]",
  Dropbox: "bg-[#1D73E8]",
  Terraform: "bg-[#50D4F9]",
  Packer: "bg-[#FF6550]",
  Netlify: "bg-[#40C4D8]",
  Maze: "bg-[#2A68EA]",
  Udacity: "bg-[#16A8D8]",
  Webflow: "bg-[#2F47EA]",
};

export default function LatestJobOpen() {
  const col1 = jobs.slice(0, 4);
  const col2 = jobs.slice(4, 8);

  return (
    <section className="relative overflow-hidden bg-[#F8F8FD] py-12 sm:py-16 lg:min-h-[877px] lg:py-[72px]">
      <div className="pointer-events-none absolute right-[-60px] top-[83px] z-0 hidden lg:block">
        <Image
          src="/latest-jobs-pattern.svg"
          alt=""
          aria-hidden
          width={860}
          height={794}
          className="h-auto w-[860px] max-w-none"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[124px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-text-primary sm:text-[42px] lg:text-[48px]">
            Latest <span className="text-accent-blue">jobs open</span>
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

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {[col1, col2].map((column, colIndex) => (
            <motion.div
              key={`col-${colIndex}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: colIndex * 0.08 }}
              className="space-y-4"
            >
              {column.map((job, rowIndex) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: rowIndex * 0.05 + colIndex * 0.08,
                  }}
                  className="flex gap-6 bg-white px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#F8F8FD] sm:h-16 sm:w-16">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-md font-body text-sm font-semibold text-white ${brandStyles[job.company] || "bg-primary"}`}
                    >
                      {job.company.charAt(0)}
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="font-body text-[19px] font-semibold leading-[1.2] text-text-primary sm:text-[20px]">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-base font-normal leading-[1.6] text-text-secondary">
                      <span>{job.company}</span>
                      <span className="h-1 w-1 rounded-full bg-text-secondary/60" />
                      <span>{job.location}</span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full bg-[#D6F6E4] px-[10px] py-[6px] font-body text-sm font-semibold leading-[1.6] text-[#56CDAD]">
                        Full-Time
                      </span>
                      <span className="h-7 w-px bg-border" />
                      <span className="inline-flex rounded-full border border-[#FFB836] px-[10px] py-[6px] font-body text-sm font-semibold leading-[1.6] text-[#FFB836]">
                        Marketing
                      </span>
                      <span className="inline-flex rounded-full border border-primary px-[10px] py-[6px] font-body text-sm font-semibold leading-[1.6] text-primary">
                        Design
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
