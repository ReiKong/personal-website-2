"use client";

import { animateScroll } from "react-scroll"
import { 
    BsLinkedin,
    BsGithub,
    BsFileEarmarkFill,
} from "react-icons/bs";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { TextScramble } from '../../styles/TextScramble'
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

const options = {
    duration: 500,
    smooth: true,
};

export default function footer() {
    useEffect(() => {
        const scrambleElements = document.querySelectorAll('.textScramble');
        scrambleElements.forEach((element) => {
          new TextScramble(element);
        });
      }, []); // Run only once on component mount

    return (
        <div className="w-[100%] h-[100%] px-[40px] py-[54px] bg-accent-500 flex-col justify-start items-left gap-[39px] inline-flex sticky z-[0] bottom-0 left-0">
            <div className="flex flex-row justify-between">
                <div className="flex-cols gap-y-4">
                    <div className="text-primary/60 text-[30px] sm:text-[64px] font-semibold font-serif leading-[1em]">Thanks for visting—let's get in touch!</div>
                    <a href="mailto:reiskongs@gmail.com">
                        <span className="text-primary text-[30px] sm:text-[64px] font-semibold font-serif leading-[1em] shadow-[inset_0px_-4px_0px_0px] shadow-primary hover:shadow-[inset_0px_-70px_0px_0px] hover:shadow-primary duration-300 hover:text-secondary1">
                            reiskongs[at]gmail.com
                        </span>
                    </a>
                </div>
                <div className="scrollToTop">
                    <BsArrowUp />
                    <ScrollLink
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        className="cursor-pointer text-primary underline hover:text-primary"
                    >
                        Scroll to top
                    </ScrollLink>
                </div>
            </div>

            <div className="text-primary text-xl font-medium font-sans pt-[40px] hidden">DESIGNED & BUILT WITH LOVE BY REI KONG</div>
            
            <div className="flex flex-col">
                {[
                    ['about', '01', 'About'],
                    ['experience', '02', 'Experience'],
                    ['education', '03', 'Education'],
                    ['skills', '04', 'Skills'],
                    ['projects', '05', 'Projects'],
                ].map(([section, index, name]) => (
                    <ScrollLink
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        className="text-primary underline hover:text-primary hover:font-serif hover:cursor-pointer transition-all ease-in-out duration:200 textScramble"
                        data-text-scramble={name}
                    >
                        <sup></sup> {name}
                    </ScrollLink>
                ))}
            </div>
            <div className="flex flex-row justify-between items-end sm:items-start">
                <div>
                    <p className="text-primary text-[16px]">© Rei Kong 2023</p>
                </div>
                <div className="justify-center items-start gap-x-[20px] flex flex-col sm:flex-row">
                    {[
                        ['https://github.com/ReiKong', 'GitHub'],
                        ['https:///www.linkedin.com/in/rei-kong/', 'LinkedIn'],
                    ].map(([link, display]) => (
                        <a
                            className="text-primary text-[16px] flex flex-row transition-colors duration-300 hover:font-serif"
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="underline text-primary text-[16px] transition-colors duration-300 hover:font-serif">{display}</span> &nbsp;&nbsp; <BsArrowUpRight className="mt-[3px]" />
                        </a>
                    ))}

                    <Link
                        className="text-primary text-[16px] hover:primary transition-colors duration-300 hover:font-serif"
                        href="/rei_kong_resume.pdf"
                        target="_blank"
                        rel="noreferrer noopener">
                        <div className="flex flex-row">
                            <span className="underline text-primary text-[16px] hover:font-serif">Resumé</span> &nbsp;&nbsp; <BsArrowUpRight className="mt-[3px]" />
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}