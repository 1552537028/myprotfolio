
"use client";
import React from "react";
import { Button, MovingBorder } from "./ui/moving-border";
import { title } from "process";

export function Grid() {
  return (
  <section id="Services">
    <p className='heading'>Services</p>
   <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
   {items.map((item) =>(  <Button duration={Math.floor(Math.random()*10000)+1000} borderRadius ="1.75rem" className ="bg-white dark:bg-black-200 text-black dark:text-white border-neutral-200 dark:border-slate-900">
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
    title:'UI&UX-desging'
},
{
  title:'web-development'
},
{
  title:'App development(IOS & Android)'
},
{
  title:'SEO & SEM'
},
{
  title:'Digital Marketing'
}]
