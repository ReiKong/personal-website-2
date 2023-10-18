import NavBar from "../../components/swe/navigation/navbar.tsx";
import Footer from "../../components/swe/navigation/footer";
import About from "../../components/swe/sections/about.tsx"
import Education from "../../components/swe/sections/education.tsx"
import Skills from "../../components/swe/sections/skills.tsx"
import Landing from "../../components/swe/sections/landing.tsx"
import Projects from "../../components/swe/sections/projects.tsx"

export default function SWEHome() {
    return (
        <div>
            <main>
                <NavBar />
                <Landing />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Footer />
            </main>
        </div>
    )
}