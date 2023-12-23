import Header from './sections/header'
import Education from './sections/education'
import Skills from './sections/skills'
import Projects from './sections/projects'

export default function mainContent() {
    return (
        <div className="top-0 bottom-0 right-0 p-10 relative min-h-[100vh]">
            <Header />
            <Education />
            <Skills />
            <Projects />
        </div>
    )
}