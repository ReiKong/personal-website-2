"use client";

import SideBar from "../../components/sideBar";
import Footer from "../../components/navigation/footer";
import MobileMenu from "../../components/navigation/mobileNav";
import WorkInProgressHero from "../../components/sections/workInProgressHero";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <MobileMenu />
            <div className="sweIndex">
                <SideBar />
                <main className="top-0 bottom-0 right-0 pt-[40px] px-10 pb-10 relative min-h-[100vh] border-b-[1px] border-b-secondary1">
                    <WorkInProgressHero id="about-wip" />
                </main>
            </div>
            <Footer />
        </div>
    );
}
