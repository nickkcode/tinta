"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Hamburger } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    {
      menuOpen ? setMenuOpen(true) : setMenuOpen(false);
    }
    console.log("Toggled");
  };

  return (
    <div className="absolute left-0 w-full h-20">
      <div className="max-w-screen-xl md:mx-auto mx-8 flex items-center h-full justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-cabinet text-4xl font-extrabold">
              <span className="text-red-200">t</span>
              <span className="text-orange-200">i</span>
              <span className="text-yellow-200">n</span>
              <span className="text-green-200">t</span>
              <span className="text-blue-200">a</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="md:flex font-medium tracking-wider items-center hidden">
            <Link
              className="hover:-translate-y-1 transition-transform hover:scale-110 py-6 px-3 duration-300"
              href={"/#features"}
            >
              Features
            </Link>
            <Link
              className="hover:-translate-y-1 transition-transform hover:scale-110 py-6 px-3 duration-300"
              href={"/#explore"}
            >
              Explore
            </Link>
            <Link
              className="hover:-translate-y-1 transition-transform hover:scale-110 py-6 px-3 duration-300"
              href={"/#about"}
            >
              About
            </Link>
            <Link
              className="hover:-translate-y-1 transition-transform hover:scale-110 py-6 px-3 duration-300"
              href={"/#contact"}
            >
              Contact
            </Link>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="md:flex hidden">
            <Link href={"/generate-palettes"}>
              <Button variant={"outline"}>Try Now</Button>
            </Link>
          </div>
          <div
            className="md:hidden flex active:scale-125 active:rotate-12 transition-transform duration-500"
            onClick={handleMenuOpen}
          >
            <Hamburger />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl z-50">
          Hello
        </div>
      )}
    </div>
  );
};

export default Header;
