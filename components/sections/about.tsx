export default function About() {
    return (
        <section id="about">
            <div className="sectionHeader">
                <h2 className="sectionHeader">About</h2>
            </div>
            <div>
                <p>I'm a developer and designer who loves a good challenge!</p>
                <span>Right now, I'm a sophomore student <a href="https://www.mcgill.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@McGill University</a>, 
                    volunteering at <a href="https://mcgill.hack4impact.org/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@Hack4Impact</a>,&nbsp;
                    <a href="https://codejam.mcgilleus.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@Code Jam</a>, 
                    and previously <a href="https://designconsultancy.ssmu.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@McGill Design Consultancy</a>.
                </span>
                <span></span>
                <span> I've been working with Python, Java, and React.js more recently, and I aim to become more proficient in frameworks like Django.</span>
            </div>
        </section>
    )
}