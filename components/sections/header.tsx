import Link from "next/link";

export default function Header() {
    return (
        <div id="header" className="flex pb-10 flex-col justify-end items-start self-stretch gap-y-[20px]">
                <button className="text-primary uppercase bg-accent color-primary px-3 pt-[9px] pb-[7px] rounded-[8px]">
                    <Link href="/rei_kong_resume.pdf" target="_blank" rel="noreferrer noopener">
                        View Resume  →
                    </Link>
                </button>
                <div>
                    <h1 className="h1Header">DEVELOPER <span className="h1Header2">&</span> DESIGNER.</h1>
                    <h1 className="h1Header">CURRENTLY IN MONTRÉAL.</h1>
                    <h1 className="h1Header">
                    <span className="h1Header2">&nbsp;STUDYING&nbsp;</span> COMPUTER SCIENCE <span className="h1Header2">&nbsp;&&nbsp;</span>SOCIOLOGY <span className="h1Header2">&nbsp;@&nbsp;</span> MCGILL UNIVERSITY.</h1>
                </div>
        </div>
    )
}