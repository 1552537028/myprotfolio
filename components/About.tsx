"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
//import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Designer from "@/data/Designer.png"

export function About() {
  return (
    <div>
      <h1 className="heading mb-10"id="About">About <span className="text-red-300">Me</span></h1>
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900  lg:flex flex-row">
        <Image
          src={Designer}
          alt="jordans"
          height="300"
          width="300"
          className="object-contain rounded-2xl"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400 lg:m-7" >
          Im Jayanth a student with an enterpenuer mindset. I like to introduce myself as student.Cuz Im Always intrested in learning new things and new technologies. As a web developer, Ive been designing websites for friends and developing simple e-shops using open-source content management systems.Im self-taught and proficient in HTML, CSS, and javascript. Ive also worked extensively with WordPress and some other tools.One of my favorite projects is my protfolio. I designed it from scratch and implemented responsive features using CSS and JavaScript and React and Next.I believe in clean code, attention to detail, and creating user-friendly experiences. Lets build something amazing together!.Feel free to connect with me on LinkedIn or drop me an email at [jayanthkopparthi595@gmail.com].
        </p>
      </BackgroundGradient>
    </div>
  );
}
