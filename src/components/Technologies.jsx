import React from "react";
import { RiReactjsLine, RiNodejsLine, RiAngularjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { TbBrandCSharp, TbBrandGolang } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineDotNet className="text-7xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPostgresql className="text-7xl text-cyan-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMsqlServer className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCSharp className="text-7xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandGolang className="text-7xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiAngularjsFill className="text-7xl text-red-500" />
        </div>
      </div>
    </div>
  );
};
