"use client";

import SideBar from "../../components/sideBar";
import Footer from "../../components/navigation/footer";
import MobileMenu from "../../components/navigation/mobileNav";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <MobileMenu />
            <div className="sweIndex">
                <SideBar />
                <main className="top-0 bottom-0 right-0 pt-[40px] px-10 pb-10 relative min-h-[100vh] max-w-[50vh] border-b-[1px] border-b-secondary1">
                    <p>
                        I recently graduated from McGill University in 2026, where I studied Computer Science and Sociology.

                        Previously, I built software during my internship at Amazon to facilitate large-scale service migrations between Amazon Web Services regions for thousands of teams and developed an internal tool to streamline lead enrichment at Business-Software.com.
                    
                        At McGill, I led teams building software for social-impact organizations at Hack4Impact McGill and drove innovation by organizing CodeJam, McGill Engineering's largest hackathon.    
                    </p>
                    <br></br>
                    <p>
                        I care about craft, grit, and raising the bar—for myself, my work, and the people around me—while always making room for good banter and better questions.

                        I'm fascinated by people; I love good conversation to understand how they function, what they care about, and why they do what they do.

                        I've lived in three countries: born in Toronto, raised in Chicago and Singapore, and attended university in Montreal.

                        Living across three countries has introduced me to very cool people with vastly different experiences and perspectives.

                        Conversation is one of the main ways I make sense of the world and challenge my own assumptions.

                        Some questions I like to ask people:
                    </p>
                    <br></br>
                    <ol>
                        <li>What do you want to be remembered for?</li>
                        <li>Tell me your life story from conception till present, and separate it into acts.</li>
                        <li>Think of all the things you want to accomplish and your dreams. Are there common values underpinning them? If so, what are they?</li>
                        <li>If you could have one thing come true right now, would you take it? What would it be?</li>
                        <li>What are your favorite food textures?</li>
                    </ol>
                    <br></br>
                    <p>
                        Outside of work, I photograph concerts and write about music.
                    </p>
                </main>
            </div>
            <Footer />
        </div>
    );
}
