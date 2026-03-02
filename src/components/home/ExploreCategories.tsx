"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { name: "Design", jobs: "235 jobs available", icon: "/cat-design.svg" },
  { name: "Sales", jobs: "756 jobs available", icon: "/cat-sales.svg" },
  {
    name: "Marketing",
    jobs: "140 jobs available",
    icon: "/cat-marketing.svg",
    active: true,
  },
  { name: "Finance", jobs: "325 jobs available", icon: "/cat-finance.svg" },
  {
    name: "Technology",
    jobs: "436 jobs available",
    icon: "/cat-technology.svg",
  },
  {
    name: "Engineering",
    jobs: "542 jobs available",
    icon: "/cat-engineering.svg",
  },
  { name: "Business", jobs: "211 jobs available", icon: "/cat-business.svg" },
  { name: "Human Resource", jobs: "346 jobs available", icon: "/cat-hr.svg" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function ExploreCategories() {
  return (
    <PageWrapper>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-0 pt-12 sm:px-8 sm:pt-16 lg:px-[124px] lg:pt-[72px]">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
          >
            <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-text-primary sm:text-[42px] lg:text-[48px]">
              Explore by <span className="text-[#26A4FF]">category</span>
            </h2>
            <button
              type="button"
              className="group inline-flex w-fit items-center gap-4 text-left font-body text-base font-semibold leading-[1.6] text-[#4640DE]
    "
            >
              Show all jobs
              <span className="inline-flex">
                <Image
                  src="/title-arrow-right.svg"
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </motion.div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8"
          >
            {categories.map((category, index) => (
              <motion.article
                key={category.name}
                variants={cardVariants}
                className={`group relative min-h-[220px] overflow-hidden border p-6 sm:p-7 lg:min-h-0 lg:p-8 ${
                  category.active
                    ? "border-primary bg-primary"
                    : "border-border bg-white"
                }`}
              >
                <motion.div
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 -left-20 w-16 ${
                    category.active ? "bg-white/20" : "bg-primary/10"
                  }`}
                  initial={{ x: -120, opacity: 0 }}
                  whileInView={{ x: 420, opacity: [0, 1, 0] }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.24 + index * 0.08,
                    ease: "easeInOut",
                  }}
                />
                <div>
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    width={48}
                    height={48}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 lg:mt-8 lg:gap-3">
                  <h3
                    className={`font-display text-[22px] font-semibold leading-[1.2] sm:text-[23px] lg:text-2xl ${
                      category.active ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <div className="inline-flex items-center gap-4">
                    <p
                      className={`font-body text-base font-normal leading-[1.6] sm:text-[17px] lg:text-lg ${
                        category.active
                          ? "text-white"
                          : "text-text-secondary/70"
                      }`}
                    >
                      {category.jobs}
                    </p>
                    <Image
                      src="/cat-arrow-right.svg"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className={category.active ? "brightness-0 invert" : ""}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
