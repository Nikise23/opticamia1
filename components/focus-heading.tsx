"use client";

import { motion, useReducedMotion } from "framer-motion";
import { focusEase } from "@/lib/motion";

export function FocusHeading({
  title,
  accent,
  className,
  as = "h2",
}: {
  title: string;
  accent: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const index = title.lastIndexOf(accent);
  const before = index >= 0 ? title.slice(0, index) : title;
  const word = index >= 0 ? accent : "";
  const after = index >= 0 ? title.slice(index + accent.length) : "";
  const Tag = as === "h1" ? motion.h1 : motion.h2;

  return (
    <Tag
      className={`focus-target ${className ?? ""}`}
      initial={
        reduce
          ? { filter: "blur(0px)", opacity: 1 }
          : { filter: "blur(4px)", opacity: 0.7 }
      }
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.5, ease: focusEase }}
    >
      {before}
      {word ? <span className="keyword">{word}</span> : null}
      {after}
    </Tag>
  );
}
