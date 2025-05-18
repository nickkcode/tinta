import React, { useState } from "react";

type PaletteColor = {
  name: string;
  hex: string;
  rgb?: string;
  hsl?: string;
  cmyk?: string;
  oklch?: string;
  description?: string;
  usages?: string[];
};

type PaletteData = {
  title?: string;
  description?: string;
  colors?: PaletteColor[];
  [key: string]: any;
};

interface PaletteProps {
  paletteData: PaletteData;
}

const colorFormats = [
  { label: "HEX", value: "hex" },
  { label: "RGB", value: "rgb" },
  { label: "HSL", value: "hsl" },
  { label: "CMYK", value: "cmyk" },
  { label: "OKLCH", value: "oklch" },
];

const Palette: React.FC<PaletteProps> = ({ paletteData }) => {
  let data: PaletteData = paletteData;
  if (typeof paletteData === "string") {
    try {
      data = JSON.parse(paletteData);
    } catch (e) {
      data = { e };
    }
  }

  const [format, setFormat] = useState<keyof PaletteColor>("hex");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (color: PaletteColor, idx: number) => {
    const code = color[format] || color.hex;
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 mt-8 flex flex-col gap-4">
        <h2 className="font-cabinet text-6xl font-bold">
          {data.title || "No title found"}
        </h2>
        <p className="text-2xl tracking-wider">{data.description}</p>
        <label className="mt-4 font-semibold text-lg">
          Color Format:
          <select
            className="ml-2 p-2 rounded border"
            value={format}
            onChange={(e) => setFormat(e.target.value as keyof PaletteColor)}
          >
            {colorFormats.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="w-full h-screen overflow-y-auto p-8 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data.colors?.map((color: PaletteColor, idx: number) => (
            <div
              key={color.hex}
              className="w-58 h-72 rounded-xl shadow-2xl bg-black dark:bg-white p-2 pb-16 relative flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleCopy(color, idx)}
              title={`Click to copy ${color[format] || color.hex}`}
            >
              <div
                className="relative w-full h-full rounded-md overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <div
                  className="absolute text-5xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-cabinet font-extrabold brightness-50"
                  style={{
                    color: color.hex === "#FFFFFF" ? "#000" : color.hex,
                  }}
                >
                  {color.name}
                </div>
              </div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
                <h1 className="font-bold" style={{ color: color.hex }}>
                  {color[format] || color.hex}
                </h1>
                {copiedIndex === idx && (
                  <span className="block text-green-400 font-semibold mt-2">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Palette;
