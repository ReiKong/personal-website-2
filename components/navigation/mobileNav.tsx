"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import ThemeChanger from "../../components/Theme";

export default function MobileMenu() {
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
                <Link href="/about" className="sideBarLink" onClick={changeText}>
                    <sup>01</sup>  About
                </Link>
                <Link href="/work" className="sideBarLink" onClick={changeText}>
                    <sup>02</sup>  Work
                </Link>
                <Link href="/projects" className="sideBarLink" onClick={changeText}>
                    <sup>03</sup>  Projects
                </Link>
                <Link href="/playground" className="sideBarLink" onClick={changeText}>
                    <sup>04</sup>  Playground
                </Link>
                <Link href="/photography" className="sideBarLink" onClick={changeText}>
                    <sup>05</sup>  Photography
                </Link>
                <Link href="/writing" className="sideBarLink" onClick={changeText}>
                    <sup>06</sup>  Writing
                </Link>
                <div className="fixed bottom-[40px] right-[40px]">
                    <ThemeChanger />
                </div>
                <div className="fixed bottom-[40px] left-[40px]">
                    {[
                        ['https://github.com/ReiKong', 'GitHub'],
                        ['https:///www.linkedin.com/in/rei-kong/', "LinkedIn"],
                        ["https://open.spotify.com/user/reiquem", "Spotify"],
                    ].map(([link, display]) => (
                        <a
                            key={link}
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
        </div>
    )
}