import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full px-6 py-16 text-center">
      <h2 className="text-4xl md:text-6xl font-cabinet font-bold leading-tight text-primary">
        “Colors speak louder than words.”
      </h2>

      <div className="mt-10 flex justify-center items-center gap-12 text-primary/70">
        <Link
          href="https://github.com/nickkcode"
          target="_blank"
          aria-label="GitHub"
        >
          <Github className="hover:scale-125 hover:text-primary transition duration-500" />
        </Link>
        <Link
          href="https://x.com/nickkcodee"
          target="_blank"
          aria-label="Twitter"
        >
          <Twitter className="hover:scale-125 hover:text-primary transition duration-500" />
        </Link>
        <Link
          href="https://linkedin.com/in/nickkcode"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin className="hover:scale-125 hover:text-primary transition duration-500" />
        </Link>
      </div>

      <p className="mt-8 text-sm text-primary/70">
        © {new Date().getFullYear()} Tinta by Nikhil. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
