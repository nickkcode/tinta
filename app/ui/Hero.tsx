import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import HeroGraphics from "./HeroGraphics";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row text-center md:text-left items-center md:pt-0 pt-32">
      <div className="w-full md:w-1/2">
        <h1 className="md:text-[6rem] text-5xl md:leading-24 font-cabinet font-extrabold">
          Express ideas through <span className="text-red-200">c</span>
          <span className="text-orange-200">o</span>
          <span className="text-yellow-200">l</span>
          <span className="text-green-200">o</span>
          <span className="text-blue-200">r</span>
        </h1>
        <p className="text-2xl font-medium md:mt-4 mt-8 tracking-wider">
          Generate beautiful color palettes from words, moods, or vibes. Export
          in multiple formats.
        </p>
        <div className="mt-8">
          <Link href={"/generate-palettes"}>
            <Button size={"lg"}>See the magic</Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <HeroGraphics />
      </div>
    </div>
  );
};

export default Hero;
