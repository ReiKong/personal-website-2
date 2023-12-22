"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconContext } from "react-icons";
import { BsCircleFill } from "react-icons/bs";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

  return (
    <div className="flex justify-between gap-x-2 mt-[20px]">
      {[
          ['text-[#F4F1EA]', 'beige'],
          ['text-[#382A23]', 'brown'],
          ['text-[#243454]', 'navy'],
          ['text-[#FFFFFF]', 'white'],
          ['text-[#D0D8CC]', 'lightgreen'],
      ].map(([color, theme]) => (
          <IconContext.Provider value={{ size: "22px" }}>
              <div>
                <BsCircleFill className={`${color} border-secondary1 border-[1px] rounded-full hover:cursor-pointer`} onClick={() => setTheme(theme)}/>
              </div>
          </IconContext.Provider>
      ))}
    </div>
  );
};

export default ThemeChanger;