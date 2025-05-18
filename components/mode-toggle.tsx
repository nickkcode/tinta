"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const themeOrder = ["light", "dark"] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [index, setIndex] = React.useState(() =>
    Math.max(themeOrder.findIndex((t) => t === theme), 0)
  );

  const handleClick = () => {
    const nextIndex = (index + 1) % themeOrder.length;
    setIndex(nextIndex);
    setTheme(themeOrder[nextIndex]);
  };

  const renderIcon = () => {
    switch (themeOrder[index]) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick} className="mx-5">
      {renderIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
