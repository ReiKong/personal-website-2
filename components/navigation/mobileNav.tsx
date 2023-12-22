"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsCircleFill } from "react-icons/bs";
import ThemeChanger from "../../components/Theme";

export default function MobileMenu() {
    const [open, setOpen] = useState('Menu');
    const [visible, setVisible] = useState('hidden');
    const [height, setHeight] = useState('0%');
    const [noScroll, setNoScroll] = useState(false);

    const changeText = () => {
        if (open == 'Menu') {
            setOpen('Close');
            setVisible('flex flex-col');
            setHeight('100vh');
            setNoScroll(true);
        } else {
            setOpen('Menu');
            setVisible('hidden');
            setHeight('0vh');
            setNoScroll(false);
        }
    };

    useEffect(() => {
        if (typeof noScroll !== 'undefined') {
          document.body.style.overflow = noScroll ? 'hidden' : 'auto';
        }
      }, [noScroll]);

    return (
        <div className="w-[100%] h-[100%] top-0 sticky pt-[4px] bg-primary flex flex-col sm:hidden">
            <div className="border-b-[1px] border-b-secondary1 px-[40px]">
                <h2
                    className="text-secondary1 font-serif uppercase tracking-tighter text-[30px] hover:text-accent-500 transition duration-200 hover:cursor-pointer"
                    onClick={changeText}
                >
                    {open}
                </h2>
            </div>
            
            <div className={`h-[100vh] border-b-[0px] ${height} ${visible} sm:hidden sm:h-[0px] transition-[height] duration-300 ease-out`}>
                <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={700}
                    className="sideBarLink">
                    <sup>01</sup>  About
                </ScrollLink>
                <ScrollLink
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={700}
                    className="sideBarLink">
                    <sup>02</sup>  Experience
                </ScrollLink>
                <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={700}
                    className="sideBarLink">
                    <sup>03</sup>  Education
                </ScrollLink>
                <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={700}
                    className="sideBarLink">
                    <sup>04</sup>  Skills
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={700}
                    className="sideBarLink">
                    <sup>05</sup>  Projects
                </ScrollLink>
                <div className="px-[40px]">
                    <ThemeChanger />
                </div>
            </div>
        </div>
    )
}