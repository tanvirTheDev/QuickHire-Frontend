"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
  onClick?: () => void;
}

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const figmaShadow =
  "0px 2.7135651111602783px 4.396662712097168px 0px rgba(192,192,192,0.03), 0px 6.862810134887695px 11.119489669799805px 0px rgba(192,192,192,0.04), 0px 13.999488830566406px 22.682716369628906px 0px rgba(192,192,192,0.05), 0px 28.836299896240234px 46.72210693359375px 0px rgba(192,192,192,0.06), 0px 79px 128px 0px rgba(192,192,192,0.09)";

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: figmaShadow } : undefined}
      transition={hover ? { type: "spring", stiffness: 300 } : undefined}
      onClick={onClick}
      className={cn(
        "rounded-[31.333332061767578px] border border-border bg-white",
        paddingClasses[padding],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
