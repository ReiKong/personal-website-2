import { BsMoonFill, BsSunFill } from "../../../node_modules/react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineClose,
} from "../../../node_modules/react-icons/ai";
import { CgClose } from "../../../node_modules/react-icons/cg";
import { FiMenu } from "../../../node_modules/react-icons/fi";
import { useState, useRef, useEffect } from "../../../node_modules/react";
import { RxDividerVertical } from "../../../node_modules/react-icons/rx";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "../../../node_modules/react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

export default function NavBarComponent(props) {
    return (
        <nav>
            <div> {/* Name Section */}
                <h1>Rei Kong</h1>
            </div>

            <div> {/* Pages Section */}
            <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    Education
                </ScrollLink>
                <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    Skills
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    Projects
                </ScrollLink>
            </div>

            <div> {/* Socials & Theme Change */}
                <div>
                    <a href="https://www.linkedin.com/in/rei-kong/">
                        <AiFillLinkedin />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/reikong">
                        <AiFillGithub />
                    </a>
                </div>
                 {/* !! THEME CHANGE HERE !!*/}
            </div>
        </nav>
    )
}