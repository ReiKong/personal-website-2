"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { BsCircleFill, BsArrowUpRight } from "react-icons/bs";
import ThemeChanger from "../components/Theme";

export default function SideBar() {
    return(
        <div id="left" className="gap-[30px] hidden sm:sticky sm:top-0 sm:p-10 sm:flex sm:flex-col sm:items-start sm:self-stretch sm:h-[100vh] border-b-[1px] border-b-secondary1">
            <Link
                href="/"
                aria-label="Home"
                title="Home"
                className="group block w-full font-sans uppercase !text-accent-500 text-[80px] tracking-tighter leading-[0.8em] cursor-pointer transition-colors duration-200 hover:!text-secondary1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500"
            >
                <span className="text-inherit">Rei</span>
                <span className="font-[Meno Banner] italic tracking-tighter text-inherit"> Kong</span>
            </Link>
            <div className="flex flex-col gap-y-[10px] w-[100%]">
                <Link href="/about" className="sideBarLink">
                    <sup>01</sup>  About
                </Link>
                <Link href="/work" className="sideBarLink">
                    <sup>02</sup>  Work
                </Link>
                <Link href="/projects" className="sideBarLink">
                    <sup>03</sup>  Projects
                </Link>
                <Link href="/playground" className="sideBarLink">
                    <sup>04</sup>  Playground
                </Link>
                <Link href="/photography" className="sideBarLink">
                    <sup>05</sup>  Photography
                </Link>
                <Link href="/writing" className="sideBarLink">
                    <sup>06</sup>  Writing
                </Link>
            </div>
            <div className="w-full mt-auto grid grid-cols-2 items-end">
                <div className="col-span-1">
                    {[
                        ['https://github.com/ReiKong', 'GitHub'],
                        ['https:///www.linkedin.com/in/rei-kong/', "LinkedIn"],
                        ["https://open.spotify.com/user/reiquem", "Spotify"],
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
                <div className="col-span-1">
                    <ThemeChanger />
                </div>
            </div>
        </div>
    )
}