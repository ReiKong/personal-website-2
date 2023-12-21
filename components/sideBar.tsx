"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsCircleFill } from "react-icons/bs";

const themes = [
    { name: "Beige" },
    { name: "Brown" },
    { name: "Navy" },
]

export default function SideBar() {
    return(
        <div id="left">
            <span className="font-serif text-primary text-[54px]">R<span className="font-serif text-accent italic">e</span>i K<span className="font-serif italic">o</span>ng</span>
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
            <div>
                <div>
                    <ul>
                        <li>
                            <BsCircleFill class="w-20 h-20" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}