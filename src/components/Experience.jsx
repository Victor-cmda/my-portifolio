import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { Calendar, Building2, Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Experiência
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Profissional
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-500/50 to-transparent md:left-1/2 md:-ml-px" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 md:flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <div
                  className={`absolute top-0 h-4 w-4 rounded-full border-2 border-purple-500 bg-neutral-900 md:top-2 ${
                    index % 2 === 0 ? "left-0 md:-left-2" : "left-0 md:-right-2"
                  }`}
                />

                <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/50">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/90 px-3 py-1 text-sm text-neutral-400">
                    <Calendar className="h-4 w-4" />
                    {experience.year}
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-1 text-xl font-medium text-neutral-100">
                      {experience.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-purple-400">
                      <Building2 className="h-4 w-4" />
                      {experience.company}
                    </div>
                  </div>

                  <p className="mb-4 text-neutral-400">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <Code2 className="h-4 w-4 text-neutral-500" />
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Experiências mais recentes
          </div>
        </motion.div>
      </div>
    </section>
  );
};
