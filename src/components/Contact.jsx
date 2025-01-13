import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";

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

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-transparent" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-pink-500/5 blur-3xl" />
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
            Entre em
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Contato
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Vamos conversar sobre seu projeto? Estou sempre aberto a novas
            oportunidades e parcerias interessantes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-pink-500/10 p-3">
              <MapPin className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-neutral-200">
              Localização
            </h3>
            <p className="text-neutral-400">{CONTACT.address}</p>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3">
              <Phone className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-neutral-200">
              Telefone
            </h3>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-neutral-400 transition-colors hover:text-purple-400"
            >
              {CONTACT.phoneNo}
            </a>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-pink-500/10 p-3">
              <Mail className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-neutral-200">Email</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-neutral-400 transition-colors hover:text-pink-400"
            >
              {CONTACT.email}
            </a>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-neutral-400">
            Ou me encontre nas redes sociais
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: CONTACT.github, label: "Github" },
              { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full border border-neutral-800 bg-neutral-900/50 p-3 transition-colors hover:border-pink-500/50"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-pink-400" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
