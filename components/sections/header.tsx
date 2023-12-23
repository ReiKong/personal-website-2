import Link from "next/link";

export default function Header() {
    return (
        <div id="header" className="flex pb-10 flex-col justify-end items-start self-stretch gap-y-[20px]">
                <button className="text-primary uppercase bg-accent-500 px-3 pt-[9px] pb-[7px] rounded-[8px] border-[1px] border-secondary1 hover:bg-accent-600 transition duration-200">
                    <Link href="/rei_kong_resume.pdf" target="_blank" rel="noreferrer noopener">
                        View Resume  →
                    </Link>
                </button>
                <div className="w-[100%]">
                    <div className="overflow-hidden">
                        <h1 className="h1Header inline-block animate-rise">DEVELOPER <span className="font-serif italic">&</span> DESIGNER.</h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="h1Header animate-rise">CURRENTLY IN MONTRÉAL.</h1>
                    </div>
                    <div className="overflow-hidden ">
                        <h1 className="h1Header text-secondary1 animate-rise">
                        <span className="font-serif italic text-secondary1 inline-block">&nbsp;STUDYING&nbsp;</span>
                            COMPUTER SCIENCE
                            <span className="font-serif italic text-secondary1 inline-block">&nbsp;&&nbsp;</span>
                            SOCIOLOGY
                            <span className="font-serif italic text-secondary1 inline-block">&nbsp;@&nbsp;</span>
                            MCGILL UNIVERSITY.</h1>
                    </div>
                    
                    
                </div>
        </div>
    )
}