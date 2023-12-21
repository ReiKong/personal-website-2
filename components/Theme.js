import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
    { name: "Beige" },
    { name: "Brown" },
    { name: "Navy" },
    { name: "White" },
    { name: "Light Green" },
]

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
        <button onClick={() => setTheme("beige")}>Beige</button>
        <button onClick={() => setTheme("brown")}>Brown</button>
        <button onClick={() => setTheme("Beige")}>Beige</button>
        <button onClick={() => setTheme("Beige")}>Beige</button>
        <button onClick={() => setTheme("Beige")}>Beige</button>
    </div>
  );
};

export default ThemeChanger;