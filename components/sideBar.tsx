"use client";

import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import { BsCircleFill } from "react-icons/bs";
import ThemeChanger from "../components/Theme";

export default function SideBar() {
    return(
        <div id="left" className="hidden sm:sticky sm:top-0 sm:p-10 sm:flex sm:flex-col sm:items-start sm:self-stretch sm:h-[100vh] border-b-[1px] border-b-secondary1">
            <span className="font-serif text-accent-500 text-[80px] tracking-tighter leading-[0.8em]">R<span className="font-serif text-accent-500 italic tracking-tighter">e</span>i K<span className="font-serif text-accent-500 italic tracking-tighter">o</span>ng</span>
            <div className="flex flex-col gap-y-[10px] w-[100%]">
                <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}
                    className="sideBarLink">
                    <sup>01</sup>  About
                </ScrollLink>
                <ScrollLink
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}
                    className="sideBarLink">
                    <sup>02</sup>  Experience
                </ScrollLink>
                <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}
                    className="sideBarLink">
                    <sup>03</sup>  Education
                </ScrollLink>
                <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}
                    className="sideBarLink">
                    <sup>04</sup>  Skills
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={400}
                    className="sideBarLink">
                    <sup>05</sup>  Projects
                </ScrollLink>
            </div>
            <div>
                <ThemeChanger />
            </div>
        </div>
    )
}