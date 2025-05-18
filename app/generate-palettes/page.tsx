"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FluidGradientBlobs } from "../ui/FluidGradient";
import MagicLoader from "../ui/MagicLoader";
import Palette from "../ui/Palette";


const Page = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [paletteData, setpaletteData] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);

    const res = await fetch("/api/generate-palette", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userPrompt: input }),
    });
    
    const data = await res.json();

    let rawData = data.result;

    if (typeof rawData === "string") {
      rawData = rawData.replace(/```json|```/g, "").trim();
      try {
        rawData = JSON.parse(rawData);
      } catch {
        rawData = {};
      }
    }

    setpaletteData(rawData);
    setLoading(false);
  };

  return (
    <>
      {!paletteData ? (
        <div className="flex justify-center items-center md:h-screen">
          {!loading ? (
            <div className="w-full flex flex-col items-center md:mt-0 mt-32">
              <h1 className="font-extrabold font-cabinet text-4xl md:text-6xl">
                Every thought holds a color
              </h1>
              <h1 className="font-extrabold font-cabinet text-4xl md:text-6xl">
                Let’s uncover yours
              </h1>
              <div className="mt-16 w-full flex flex-col gap-8 items-center md:px-64">
                <Input
                  placeholder="What's on your mind?"
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                />
                <Button
                  size={"lg"}
                  className="bg-accent text-accent-foreground"
                  onClick={handleGenerate}
                >
                  Start the magic
                </Button>
              </div>
              <p className="md:text-xl mt-18 text-foreground/50 italic tracking-wider">
                Type a memory, a mood, or a dream — and we’ll translate it into
                color.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <MagicLoader />
              <FluidGradientBlobs />

              <h1 className=" absolute font-cabinet font-bold tracking-wider text-4xl top-32 left-1/2 -translate-x-1/2">
                Composing a palette from your words
              </h1>

              <p className="absolute left-1/2 -translate-x-1/2 bottom-32 italic">
                Almost there.
              </p>
            </div>
          )}
        </div>
      ) : (
        <Palette paletteData={paletteData} />
      )}
    </>
  );
};

export default Page;