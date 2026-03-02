"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-background-muted lg:h-[794px]">
        <div className="mx-auto grid min-h-[760px] w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-7 sm:px-6 sm:py-10 lg:grid-cols-[629px_1fr] lg:gap-0">
          <motion.div className="relative z-30 pt-3 sm:pt-6 lg:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
              className="font-display text-[66px] font-semibold leading-[1.03] tracking-[-0.01em] text-text-primary max-[420px]:text-[56px] sm:text-[72px] lg:text-[72px]"
            >
              Discover
              <br />
              more than
              <br />
              <span className="text-accent-blue">5000+ Jobs</span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.5,
                transformOrigin: "left center",
              }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/hero-underline.svg"
                alt="Underline decoration"
                width={455}
                height={40}
                className="mt-3 w-[320px] sm:w-[380px] lg:w-[455px]"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
              className="mt-8 max-w-[521px] text-lg leading-[1.6] text-text-secondary/70 sm:text-xl"
            >
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.34 }}
              className="relative z-30 mt-8 flex h-auto w-full items-center justify-start bg-white p-4 md:h-[89px] md:w-[852px] md:max-w-[852px] md:p-4 shadow-[0px_79px_128px_rgba(192,192,192,0.09),0px_28.8363px_46.7221px_rgba(192,192,192,0.0598508),0px_13.9995px_22.6827px_rgba(192,192,192,0.0475723),0px_6.86281px_11.1195px_rgba(192,192,192,0.0380675),0px_2.71357px_4.39666px_rgba(192,192,192,0.0270615)]"
            >
              <div className="grid w-full grid-cols-1 items-center md:grid-cols-[1.4fr_1px_1fr_172px]">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    aria-label="Job title or keyword"
                    className="h-[57px] w-full border-0 border-b border-border bg-transparent pl-14 pr-4 text-base font-medium text-text-primary placeholder:font-normal placeholder:text-text-muted/65 focus:outline-none md:border-b-0"
                  />
                </div>

                <div className="hidden h-[57px] w-px bg-border md:block" />

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
                  <select
                    aria-label="Location"
                    defaultValue="florence-italy"
                    className="h-[57px] w-full appearance-none border-0 border-b border-border bg-transparent pl-14 pr-10 text-base font-medium text-text-primary focus:outline-none md:border-b-0"
                  >
                    <option value="florence-italy">Florence, Italy</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
                </div>

                <button
                  type="button"
                  className="h-[57px] w-full bg-primary px-5 text-base font-semibold text-white transition-colors hover:bg-[#3F38CA]"
                >
                  Search my job
                </button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.44 }}
              className="mt-4 text-[17px] text-text-secondary sm:text-base"
            >
              Popular : UI Designer, UX Researcher, Android, Admin
            </motion.p>
          </motion.div>

          <div className="hidden h-[794px] lg:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="pointer-events-none absolute left-[calc(50%+92px)] top-[100px] z-10 hidden h-[707px] w-[501px] overflow-hidden lg:block"
        >
          <Image
            src="/hero-pattern.svg"
            alt=""
            aria-hidden
            width={1124}
            height={1186}
            className="absolute -left-[280px] -top-[88px] z-0 h-auto w-[900px] max-w-none"
          />
          <Image
            src="/hero-pic.png"
            alt="Hero model"
            fill
            className="z-10 object-cover object-top [clip-path:polygon(0_0,100%_0,100%_84%,0_100%)]"
            priority
          />
        </motion.div>
      </section>
    </PageWrapper>
  );
}
