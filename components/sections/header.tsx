import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import mcgillUniversity from "../../public/images/mcgillUniversity.jpg"

export default function Header() {
    const [show, setShow] = useState("hidden");

    const handleMouseEnter = () => {
        setShow("");
    }

    const handleMouseLeave = () => {
        setShow("hidden");
    }

    return (
        <section 
            id="header" 
            className="h-[calc(100vh-40px)] flex pb-10 flex-col justify-end items-start self-stretch gap-y-[20px] relative"
        >
            <div className={`w-full h-full overflow-hidden relative md:inline ${show}`}>
                <p className={`relative z-10 ${show} ml-2 mt-2 bg-primary px-1 border border-secondary1 rounded w-[236px]`}>Photo via the McGill photo bank</p>
                <Image
                    src={mcgillUniversity}
                    className={`relative z-[1] w-full top-0 left-0 object-cover border border-secondary1 ${show}`}
                    placeholder="blur"
                    fill={true}
                    alt="McGill University"
                />
            </div>
            <div className="h-[42px]">
                <button className="text-primary uppercase bg-accent-500 px-3 pt-[9px] pb-[7px] rounded-[2px] border-[1px] border-secondary1 animate-rise hover:bg-accent-600 transition duration-300">
                    <Link href="/rei_kong_resume.pdf" target="_blank" rel="noreferrer noopener" className="hover:text-secondary1">
                        View Resume  →
                    </Link>
                </button>
            </div>
            
            <div className="w-[100%] flex flex-col gap-0">

                <h1 className="h1Header inline-block animate-rise leading-none">DEVELOPER <span className="font-serif italic">&</span> DESIGNER.</h1>


                <h1 className="h1Header animate-rise leading-none">CURRENTLY IN MONTRÉAL.</h1>

                <h1 className="h1Header text-secondary1 animate-rise leading-none">
                    <span className="font-serif italic text-secondary1 inline-block">&nbsp;STUDYING&nbsp;</span>
                    <a href="https://www.cs.mcgill.ca/" className="uppercase hover:text-accent-500 transition-colors duration-300">Computer Science</a>
                    <span className="font-serif italic text-secondary1 inline-block">&nbsp;&&nbsp;</span>
                    <a href="https://www.mcgill.ca/sociology/" className="uppercase hover:text-accent-500 transition-colors duration-300">Sociology</a>
                    <span className="font-serif italic text-secondary1 inline-block">&nbsp;@&nbsp;</span>
                    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>MCGILL UNIVERSITY.</span>
                </h1>

            </div>
        </section>
    )
}