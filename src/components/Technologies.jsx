import React from "react";
import { RiReactjsLine, RiNodejsLine, RiAngularjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { TbBrandCSharp, TbBrandGolang } from "react-icons/tb";
import { SiMongodb, SiNestjs, SiRabbitmq } from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400", delay: 0.1 },
  { icon: RiNodejsLine, name: "Node.js", color: "text-green-500", delay: 0.2 },
  { icon: AiOutlineDotNet, name: ".NET", color: "text-purple-600", delay: 0.3 },
  {
    icon: DiPostgresql,
    name: "PostgreSQL",
    color: "text-cyan-700",
    delay: 0.4,
  },
  { icon: DiMsqlServer, name: "SQL Server", color: "text-red-500", delay: 0.5 },
  { icon: SiRabbitmq , name: "RabbitMQ", color: "text-orange-600", delay: 0.6 },
  { icon: TbBrandGolang, name: "Golang", color: "text-cyan-500", delay: 0.7 },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500", delay: 0.8 },
  { icon: RiAngularjsFill, name: "Angular", color: "text-red-500", delay: 0.9 },
  { icon: SiNestjs , name: "NestJS", color: "text-red-500", delay: 0.9 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const Technologies = () => {
  return (
    <section id="technologies" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute left-0 top-3/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
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
            Tecnologias
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              & Ferramentas
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Conjunto de tecnologias que utilizo para criar soluções robustas e
            escaláveis
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col items-center gap-4">
                  <tech.icon
                    className={`text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <span className="text-sm font-medium text-neutral-300">
                    {tech.name}
                  </span>
                </div>

                <div className="absolute inset-0 rounded-xl opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-opacity duration-300 group-hover:opacity-100" />
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
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Experiência profissional com todas as tecnologias listadas
          </div>
        </motion.div>
      </div>
    </section>
  );
};
