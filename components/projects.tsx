"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="mb-28 mt-40 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
        <p>Projects</p>
    </motion.section>
  )
}
