"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsCircleFill } from "react-icons/bs";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

  return (
    <div className="flex flex-col xl:flex-row items-end justify-end gap-[8px]">
      {[
          ['text-[#F4F1EA]', 'beige'],
          ['text-[#382A23]', 'brown'],
          ['text-[#243454]', 'navy'],
          ['text-[#FFFFFF]', 'white'],
          ['text-[#D0D8CC]', 'lightgreen'],
      ].map(([color, theme]) => (
        <div class="text-[30px] sm:text-[22px]">
          <BsCircleFill className={`${color} border-secondary1 border-[1px] rounded-full hover:cursor-pointer hover:border-accent-500 transition duration-200`} onClick={() => setTheme(theme)}/>
        </div>
      ))}
    </div>
  );
};

export default ThemeChanger;