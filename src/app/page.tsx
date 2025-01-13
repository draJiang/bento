"use client";

import Image from "next/image";
// import { saveAs } from "file-saver";

export default function Home() {
  return (
    <div className="mx-auto  mt-16 md:mt-28 px-4 max-w-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Bento
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
        A note-taking tool that allows you to quickly access and edit your notes
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://github.com/draJiang/bento/releases/latest/download/Bento-1.0.0-arm64.dmg"
            onClick={() => {}}
            className=" w-56 flex justify-center flex-row items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            macOS Apple Silicon 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
          </a>
          <a
            href="https://github.com/draJiang/bento/releases/latest/download/Bento-1.0.0.dmg"
            onClick={() => {}}
            className=" w-56 flex justify-center flex-row items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            macOS Intel 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-10 items-center my-8">

          {/* <div className="flex flex-col justify-center">
            <Image
              className="h-fit"
              width={600}
              height={100}
              src="/Importing-the-effects-of-obsidian.png"
              alt="导入 Obsidian 的效果"
            />
            <p className="text-xs mt-1 text-center	text-slate-500">
              导入 Obsidian 支持显示双链
            </p>
          </div> */}
          <div className="flex flex-col justify-center">
            <video autoPlay muted controls loop  src="/bento.mp4" className=" rounded-sm"></video>
            <p className="text-xs mt-4 text-center	text-slate-500">
            Quick launch with support for collaboration with note-taking tools like Logseq and Obsidian.
            </p>
          </div>

          {/* <div className="flex flex-col justify-center">
            <Image
              className="h-fit rounded-sm"
              width={640}
              height={0}
              src="/youtube.png"
              alt="bento"
            />
            <p className="text-xs mt-4 text-center	text-slate-500">
              Quickly launch to capture ideas.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
