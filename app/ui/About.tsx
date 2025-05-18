import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-20 text-center relative overflow-hidden rounded-xl">
      <h2 className="text-4xl md:text-6xl w-1/2 mx-auto font-cabinet font-bold mb-6">
        Bring your ideas to life through color
      </h2>
      <p className="text-lg md:text-2xl text-primary/80 leading-relaxed w-2/3 mx-auto">
        Our tool transforms words, moods, and feelings into stunning, shareable
        color palettes. Whether you&apos;re designing a brand, building a UI, or just
        chasing an aesthetic, we help you find the perfect shades that match
        your creative energy. No guesswork — just intuitive, intelligent palette
        generation that speaks your vibe.
      </p>
      <div className="absolute w-96 h-96 bg-red-200 rounded-full top-1/2 -translate-y-1/2 -left-80 blur-[200px]">
      </div>
      <div className="absolute w-96 h-96 bg-red-200 rounded-full top-1/2 -translate-y-1/2 -right-80 blur-[200px]">
      </div>
    </section>
  );
};

export default About;
