import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/PictureProfileVictor.png";
import { motion } from "framer-motion";

const fadeInUp = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
});

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:gap-12">
          <motion.div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp(0.2)} className="space-y-4">
              <h1 className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Victor Hugo Somavilla
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp(0.4)} className="mt-4 md:mt-6">
              <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 bg-clip-text text-xl font-medium tracking-tight text-transparent sm:text-2xl md:text-3xl">
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp(0.6)}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-neutral-400 md:mt-8 md:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeInUp(0.8)}
              className="mt-8 flex gap-4 md:mt-10"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-purple-500 px-6 py-3 text-white transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10">Entre em contato</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#projetos"
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-neutral-700 px-6 py-3 text-neutral-300 transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10">Ver projetos</span>
                <div className="absolute inset-0 z-0 bg-neutral-800/50 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 shrink-0 md:w-80 lg:w-96"
          >
            <div className="relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.img
                src={profilePic}
                alt="Victor Hugo Somavilla"
                className="relative z-0 w-full transform rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 object-cover shadow-xl transition-transform duration-300 hover:scale-105"
                style={{
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform animate-bounce">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="h-6 w-6 text-neutral-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </div>
    </section>
  );
};
