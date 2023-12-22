"use client";

import { animateScroll } from "react-scroll"
import { 
    BsLinkedin,
    BsGithub,
    BsFileEarmarkFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import Link from "next/link";

const options = {
    duration: 500,
    smooth: true,
};

export default function footer() {
    return (
        <div className="w-[100%] h-[100%] px-2.5 py-[54px] bg-accent-500 flex-col justify-start items-center gap-[39px] inline-flex">
            <div className="text-primary text-[64px] font-semibold font-serif">Thanks for coming! Let’s get in touch!</div>
            <div className="text-primary text-xl font-medium font-sans">DESIGNED & BUILT WITH LOVE BY REI KONG</div>
            <div className="justify-center items-start gap-2.5 inline-flex">
                <a
                    className="text-primary"
                    href="https://github.com/ReiKong"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <IconContext.Provider value={{ size: "22px" }}>
                        <div>
                            <BsGithub />
                        </div>
                    </IconContext.Provider>
                </a>

                <a
                    className="text-primary"
                    href="https:///www.linkedin.com/in/rei-kong/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <IconContext.Provider value={{ size: "22px" }}>
                        <div>
                            <BsLinkedin />
                        </div>
                    </IconContext.Provider>
                </a>

                <Link
                    className="text-primary"
                    href="/rei_kong_resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener">
                    <IconContext.Provider value={{ size: "22px" }}>
                        <div>
                            <BsFileEarmarkFill />
                        </div>
                    </IconContext.Provider>
                </Link>
            </div>
        </div>
    )
}