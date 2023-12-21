import Header from './sections/header'
import Education from './sections/education'
import Skills from './sections/skills'
import Projects from './sections/projects'

export default function mainContent() {
    return (
        <div id="right">
            <Header />
            <Education />
            <Skills />
            <Projects />
        </div>
    )
}