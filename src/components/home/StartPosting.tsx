"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StartPosting() {
  return (
    <section className="bg-white pt-12 sm:pt-16 lg:pt-[72px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <Image
            src="/start-posting-desktop.svg"
            alt="Start posting jobs today section"
            width={1440}
            height={558}
            className="h-auto w-full"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="lg:hidden"
        >
          <Image
            src="/start-posting-mobile.svg"
            alt="Start posting jobs today section"
            width={1000}
            height={1000}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
