"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "../layout/PageWrapper";

export default function CompaniesLogo() {
  return (
    <PageWrapper>
      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:px-[124px] lg:py-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-body text-base font-normal leading-[1.6] text-black sm:text-lg"
          >
            Companies we helped grow
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="hidden w-full lg:block"
          >
            <Image
              src="/featured-companies.svg"
              alt="Featured companies"
              width={1194}
              height={40}
              className="h-auto w-full"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative -mx-5 overflow-hidden py-2 sm:-mx-8 lg:hidden"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent sm:w-16" />
            <motion.div
              className="flex w-max items-center gap-8 pl-5 sm:pl-8"
              animate={{ x: [0, -728] }}
              transition={{
                duration: 14,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Image
                src="/featured-companies.svg"
                alt="Featured companies"
                width={728}
                height={140}
                className="h-auto w-[728px] max-w-none opacity-80"
              />
              <Image
                src="/featured-companies.svg"
                alt=""
                aria-hidden
                width={728}
                height={140}
                className="h-auto w-[728px] max-w-none opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
