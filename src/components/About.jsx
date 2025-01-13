import React from "react";
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:mb-24"
        >
          <h2 className="text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Sobre
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Mim
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/20 to-transparent" />
              <img
                className="relative z-0 w-full transform object-cover transition-transform duration-300 hover:scale-105"
                src={aboutImg}
                alt="Sobre"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border border-neutral-800" />
            <div className="absolute -right-4 top-4 -z-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
                {ABOUT_TEXT}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-light text-purple-400">4+</div>
                <div className="mt-2 text-sm text-neutral-400">Anos de Experiência</div>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-light text-purple-400">50+</div>
                <div className="mt-2 text-sm text-neutral-400">Projetos Concluídos</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Vamos conversar
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};