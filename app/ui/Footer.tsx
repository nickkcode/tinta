import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="font-cabinet text-xl font-bold">
        Made wi by{" "}
        <Link className="" href={"https://github.com/nickkcode"}>Nikhil Singh Mehta</Link>
      </p>
    </div>
  );
};

export default Footer;
