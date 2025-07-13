
"use client";
import React from "react";
import { Button, MovingBorder } from "./ui/moving-border";
import { title } from "process";

export function Grid() {
  return (
  <section id="Skills">
    <p className='heading'>Skills</p>
   <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
  {items.map((item) =>(  
  <Button 
    key={item.title} // Add this line
    duration={Math.floor(Math.random()*10000)+1000} 
    borderRadius="1.75rem" 
    className="bg-white dark:bg-black-200 text-black dark:text-white border-neutral-200 dark:border-slate-900"
  >
    <div>
      {item.title}
    </div>
  </Button>
))}


    </div>
  </section>
    
  );

}
const items=[
  {
    title:'UI&UX-design'
},
{
  title:'web-development'
},
{
  title:'SEO & SEM'
},
{
  title:'Digital Marketing'
},
{ 
  title:'App Development' 
},
{
  title: 'Gpt building'
}

]
