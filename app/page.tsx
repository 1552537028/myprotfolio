import { About } from "@/components/About";
import Approch from "@/components/Approch";
import { CardHoverEffectDemo } from "@/components/Cards";
import { ContactUs } from "@/components/Contact";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { title } from "process";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TracingBeam>
          <FloatingNav 
         navItems={[{name:'Home', link:'#Home'}, {name:'about', link:'#About'},{name:'Skills', link:'#Skills'},{name:'Services', link:'#Services'},{name:'Approach', link:'#Approach'}]}
         />
        <Hero/>
        <About/>
        <br/>
        <br/>
        <Grid/>
        <br/>
        <br/>
        <CardHoverEffectDemo/>
        <Approch/>
        </TracingBeam>
        <ContactUs/>
      </div>
    </main>
  );
}
