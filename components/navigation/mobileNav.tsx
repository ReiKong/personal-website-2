"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsCircleFill } from "react-icons/bs";
import ThemeChanger from "../../components/Theme";

export default function MobileMenu() {
    const openMenuHeight = `calc(100vh-54px)`;
    const [open, setOpen] = useState('Menu');
    const [visible, setVisible] = useState('hidden');
    const [height, setHeight] = useState('0vh');
    const [noScroll, setNoScroll] = useState(false);

    const changeText = () => {
        if (open == 'Menu') {
            setOpen('Close');
            setVisible('flex flex-col');
            setHeight('screenMinus54');
            setNoScroll(true);
        } else {
            setOpen('Menu');
            setVisible('hidden');
            setHeight('h-0vh');
            setNoScroll(false);
        }
    };

    useEffect(() => {
        if (typeof noScroll !== 'undefined') {
          document.body.style.overflow = noScroll ? 'hidden' : 'auto';
        }
      }, [noScroll]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
    // Calculate the pixel value for 100vh
    const vh = window.innerHeight * 0.01;
    setOffset(-100 * vh);
    }, []);

    return (
        <div className="w-[100%] top-0 sticky z-[3] pt-[4px] bg-primary flex flex-col sm:hidden">
            <div className="border-b-[1px] border-b-secondary1 px-[40px] h-[50px]">
                <h2
                    className="text-secondary1 font-serif uppercase tracking-tighter text-[30px] hover:text-accent-500 transition duration-200 hover:cursor-pointer"
                    onClick={changeText}
                >
                    {open}
                </h2>
            </div>
            
            <div className={`border-b-[0px] ${height} ${visible} sm:hidden sm:h-[0vh] hover:screenMinus54 transition-height duration-300 ease-in-out`}>
                <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="sideBarLink"
                    onClick={changeText}
                >
                    <sup>01</sup>  About
                </ScrollLink>
                <ScrollLink
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="sideBarLink"
                    onClick={changeText}
                >
                    <sup>02</sup>  Experience
                </ScrollLink>
                <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="sideBarLink"
                    onClick={changeText}
                >
                    <sup>03</sup>  Education
                </ScrollLink>
                <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="sideBarLink"
                    onClick={changeText}
                >
                    <sup>04</sup>  Skills
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    className="sideBarLink"
                    onClick={changeText}
                >
                    <sup>05</sup>  Projects
                </ScrollLink>
                <div className="px-[40px]">
                    <ThemeChanger />
                </div>
                <div className="fixed bottom-[40px] left-[40px]">
                    <span className="font-serif text-accent-500 text-[60px] tracking-tighter leading-[0.8em]">R<span className="font-serif text-accent-500 italic tracking-tighter">e</span>i K<span className="font-serif text-accent-500 italic tracking-tighter">o</span>ng</span>
                    
                </div>
                
            </div>
        </div>
    )
}