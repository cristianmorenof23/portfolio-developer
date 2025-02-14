import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" checked={isDark} onChange={handleToggle} />
      <span className="swap-off icon-[tabler--sun] size-7"></span>
      <span className="swap-on icon-[tabler--moon] size-7"></span>
    </label>
  );
};

export default ThemeToggle;
