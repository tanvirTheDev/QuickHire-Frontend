"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-background-muted">
        <div className="mx-auto grid min-h-[760px] w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-7 sm:px-6 sm:py-10 lg:grid-cols-[629px_1fr] lg:gap-0">
          <motion.div className="relative z-10 pt-3 sm:pt-6 lg:pt-0">
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
              className="mt-8 rounded-sm bg-white p-2 shadow-[0px_2.7135651111602783px_4.396662712097168px_0px_rgba(192,192,192,0.03),0px_6.862810134887695px_11.119489669799805px_0px_rgba(192,192,192,0.04),0px_13.999488830566406px_22.682716369628906px_0px_rgba(192,192,192,0.05)]"
              whileHover={{ y: -2 }}
            >
              <div className="grid grid-cols-1 items-center gap-1 md:grid-cols-[1fr_1px_1fr_auto] md:gap-0">
                <Input
                  placeholder="Job title or keyword"
                  leftIcon={<Search className="h-5 w-5" />}
                  className="h-[56px] rounded-none border-0 border-b border-border bg-transparent px-3 shadow-none focus:border-b focus:border-border focus:ring-0 md:border-b-0"
                />

                <div className="hidden h-8 w-px bg-border md:block" />

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-text-muted" />
                  <Select
                    defaultValue="florence-italy"
                    options={[
                      { value: "florence-italy", label: "Florence, Italy" },
                    ]}
                    className="h-[56px] rounded-none border-0 border-b border-border bg-transparent pl-10 shadow-none focus:border-b focus:border-border focus:ring-0 md:border-b-0"
                  />
                </div>

                <Button size="lg" className="h-[56px] w-full px-9 md:w-auto">
                  Search my job
                </Button>
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

          <div className="relative hidden h-[794px] overflow-visible lg:block">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/hero-pattern.svg"
                  alt="Hero pattern"
                  width={1124}
                  height={1186}
                  className="absolute -right-44 -top-48 h-auto w-[920px] max-w-none opacity-70"
                  priority
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/hero-pic.png"
                  alt="Hero model"
                  width={714}
                  height={1037}
                  className="absolute right-[-30px] top-[19%] h-auto w-[620px] max-w-none drop-shadow-[0_22px_45px_rgba(37,50,75,0.25)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
