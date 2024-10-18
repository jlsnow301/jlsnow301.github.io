import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  rectangle?: true;
};

export function ThemeToggle(props: Props) {
  if (typeof window === "undefined") {
    return;
  }

  const { rectangle } = props;

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeIcon = theme === "light" ? "🌙" : "🌞";

  if (!rectangle) {
    return (
      <Button variant="ghost" size="icon" onClick={handleClick}>
        {themeIcon}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className="bg-blue-500 text-white transition-colors dark:bg-neutral-700 dark:hover:bg-neutral-200 dark:hover:text-gray-800"
    >
      Toggle Theme {themeIcon}
    </Button>
  );
}
