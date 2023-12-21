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
            <span class="font-serif text-accent text-[54px]">R<span class="font-serif text-accent italic">e</span>i K<span class="font-serif italic">o</span>ng</span>
            <ScrollLink
                onClick={() => setIsOpen(false)}
                to="about"
                spy={true}
                smooth={true}
                offset={-5}
                duration={700}
                className="sideBarLink">
                <sup>01</sup>  About
            </ScrollLink>
            <ScrollLink
                onClick={() => setIsOpen(false)}
                to="experience"
                spy={true}
                smooth={true}
                offset={-5}
                duration={700}
                className="sideBarLink">
                <sup>02</sup>  Experience
            </ScrollLink>
            <ScrollLink
                onClick={() => setIsOpen(false)}
                to="education"
                spy={true}
                smooth={true}
                offset={-5}
                duration={700}
                className="sideBarLink">
                <sup>03</sup>  Education
            </ScrollLink>
            <ScrollLink
                onClick={() => setIsOpen(false)}
                to="education"
                spy={true}
                smooth={true}
                offset={-5}
                duration={700}
                className="sideBarLink">
                <sup>04</sup>  Skills
            </ScrollLink>
            <ScrollLink
                onClick={() => setIsOpen(false)}
                to="education"
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