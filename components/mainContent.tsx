import Header from './sections/header'
import About from './sections/about'
import Education from './sections/education'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Experience from './sections/experience'

export default function mainContent() {
    return (
        <div className="top-0 bottom-0 right-0 pt-[40px] px-10 pb-10 relative min-h-[100vh] border-b-[1px] border-b-secondary1">
            <Header />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
        </div>
    )
}