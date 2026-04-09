"use client";

import Link from "next/link";
import SideBar from "../../components/sideBar";
import Footer from "../../components/navigation/footer";
import MobileMenu from "../../components/navigation/mobileNav";

export default function PhotographyPage() {
    return (
        <div className="flex flex-col">
            <MobileMenu />
            <div className="sweIndex">
                <SideBar />
                <main className="top-0 bottom-0 right-0 pt-[40px] px-10 pb-10 relative min-h-[100vh] border-b-[1px] border-b-secondary1">
                    <div className="max-w-5xl">
                        <p className="uppercase text-secondary1 tracking-wide">Photography</p>
                        <h1 className="h1Header leading-none mt-2">PHOTO WORK & VISUAL STORIES.</h1>
                        <p className="mt-6 text-secondary1 max-w-2xl">
                            This page is ready for your photography collection. Add albums, featured shots,
                            or project narratives here.
                        </p>

                        <div className="mt-10">
                            <Link
                                href="/"
                                className="uppercase bg-accent-500 px-3 pt-[9px] pb-[7px] rounded-[2px] border-[1px] border-secondary1 hover:bg-accent-600 transition duration-300 inline-block"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
