"use client";

import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { BsCircleFill, BsArrowUpRight } from "react-icons/bs";
import ThemeChanger from "../components/Theme";

export default function SideBar() {
    return(
        <div id="left" className="hidden sm:sticky sm:top-0 sm:p-10 sm:flex sm:flex-col sm:items-start sm:self-stretch sm:h-[100vh] border-b-[1px] border-b-secondary1">
            <span className="font-sans uppercase text-accent-500 text-[80px] tracking-tighter leading-[0.8em]">Rei<span className="font-[Meno Banner] text-accent-500 italic tracking-tighter"> Kong</span></span>
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
            <div className="w-full">
                {[
                    ['https://github.com/ReiKong', 'GitHub'],
                    ['https:///www.linkedin.com/in/rei-kong/', 'LinkedIn'],
                ].map(([link, display]) => (
                    <a
                        className="text-secondary1 text-[16px] flex flex-row transition-colors duration-300 hover:font-serif"
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span className="underline text-secondary1 text-[16px] transition-colors duration-300 hover:font-serif">{display}</span> &nbsp;&nbsp; <BsArrowUpRight className="mt-[3px]" />
                    </a>
                ))}

                <Link
                    className="text-secondary1 text-[16px] hover:primary transition-colors duration-300 hover:font-serif"
                    href="/rei_kong_resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="flex flex-row">
                        <span className="underline text-secondary1 text-[16px] hover:font-serif">Resumé</span> &nbsp;&nbsp; <BsArrowUpRight className="mt-[3px]" />
                    </div>
                </Link>
            </div>
        </div>
    )
}