import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Folder,
  Code2,
  ArrowUpRight,
} from "lucide-react";

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

export const Projects = () => {
  return (
    <section id="projetos" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
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
            Projetos
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Destacados
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Folder className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-medium text-neutral-100 group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-2 flex items-center gap-2 text-xs text-neutral-500">
                    <Code2 className="h-4 w-4" />
                    Tecnologias
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute right-4 top-4 text-cyan-400 opacity-0 transition-all duration-300 group-hover:right-3 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
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
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Victor-cmda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <Github className="h-4 w-4" />
            Ver mais projetos no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
