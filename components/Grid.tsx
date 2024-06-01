/*import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { title } from 'process'
import { gridelements } from '../data'

const Grid = () => {
  return (
    <section id='Services'>
      <p className='heading'>Services</p>
      <br/>
      <div>
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <BentoGrid>
            {gridelements.map((items)=>(
                <BentoGridItem
                    id={items.id}
                    key={items.id}
                    title={items.title}
                    description={items.description}
                />
            ))}
         </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Grid */

import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Web Designing",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: undefined ,
  },
  {
    title: "Front-End-Development",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: undefined ,
  },
  {
    title: "Web-Development",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: undefined ,
  },
  {
    title: "App-Development",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: undefined ,
  },
  {
    title: "SEO",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: undefined ,
  },
  {
    title: "Digital Marketing",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: undefined ,
  },
];
