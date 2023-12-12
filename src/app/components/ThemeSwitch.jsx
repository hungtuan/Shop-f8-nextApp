"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="bordered"
      isIconOnly
      onClick={toggleTheme}
      className={theme === "light" ? "light-theme" : "dark-theme"}
    >
      {mounted && <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />}
    </Button>
  );
}
