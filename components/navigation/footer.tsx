"use client";

import { animateScroll } from "react-scroll"
import { 
    BsLinkedin,
    BsGithub,
    BsFileEarmarkFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const options = {
    duration: 500,
    smooth: true,
};

export default function footer() {
    return (
        <div className="w-[100%] h-[100%] px-[40px] py-[54px] bg-accent-500 flex-col justify-start items-left gap-[39px] inline-flex sticky z-[0] bottom-0 left-0">
            <div className="scrollToTop">
                <p>↑</p>
                <p className="rotate-90">Scroll to top</p>
            </div>
            <div className="flex-cols gap-y-4">
                <div className="text-primary/60 text-[64px] font-semibold font-serif leading-[1em]">Thanks for visting—let's get in touch!</div>
                <a 
                    className="text-primary text-[64px] font-semibold font-serif leading-[1em] hover:bg-primary hover:text-secondary1"
                    href="mailto:reiskongs@gmail.com"
                >
                    reiskongs[at]gmail.com</a>
            </div>
            <div className="text-primary text-xl font-medium font-sans pt-[40px]">DESIGNED & BUILT WITH LOVE BY REI KONG</div>
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
                        className="text-primary">
                        <sup></sup>  {name}
                    </ScrollLink>
                ))}
            </div>
            <div>
                <p className="text-primary text-[16px]">© Rei Kong 2023</p>
            </div>
        </div>
    )
}