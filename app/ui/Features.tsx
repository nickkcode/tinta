import React from "react";
import Image from "next/image";

const features = [
  {
    title: "AI-Generated Custom Palettes",
    description:
      "Describe your mood, theme, or idea — and our smart engine crafts unique palettes that capture your vision perfectly. It's creativity, simplified.",
    image: "/features/ai-palette.png",
  },
  {
    title: "Various Color Code Formats",
    description:
      "Get your colors in HEX, RGB, HSL, and more. Whether you're a designer or developer, our format flexibility fits seamlessly into your workflow.",
    image: "/features/code-formats.png",
  },
  {
    title: "Effortless Export",
    description:
      "Download and share your palettes in multiple formats. Save time, stay consistent, and bring your colors wherever your project goes.",
    image: "/features/export.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full px-6 py-24 space-y-24 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-12`}
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-cabinet font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-lg md:text-xl text-primary/80 leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={feature.image}
              alt={feature.title}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
