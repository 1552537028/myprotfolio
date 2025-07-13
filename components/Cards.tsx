import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div id="Skills">
      <h1 className="heading text-orange-300">Tools</h1>
      <div className="max-w-5xl mx-auto">
       <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "AI",
    description:"",
    link:'#Skills',
  },
  {
    title: "NodeJs",
    description:"",
    link:'#Skills',
  },
  {
    title: "Express",
    description:"",
    link:'#Skills',
  },
  {
    title: "Mongo DB",
    description:"",
    link:'#Skills',
  },
  {
    title: "Figma",
    description:"",
    link:'#Skills',
  },
  {
    title: "Word Press",
    description:"",
    link:'#Skills',
  },
  {
    title: "Flutter Flow",
    description:"",
    link:'#Skills',
  },
  {
    title: "SEO",
    description:"",
    link:'#Skills',
  },
];
