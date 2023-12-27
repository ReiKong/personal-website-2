export default function About() {
    return (
        <section id="about">
            <div className="sectionHeader">
                <h2 className="sectionHeader">About</h2>
            </div>
            <div>
                <h3 className="sectionSubheader">A little about me...</h3>
                <p className="text-secondary1/85">I'm a developer and designer who loves a good challenge!</p>
                <span>Right now, I'm a sophomore student <a href="https://www.mcgill.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@McGill University</a>, 
                    volunteering at <a href="https://mcgill.hack4impact.org/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@Hack4Impact</a>,&nbsp;
                    <a href="https://codejam.mcgilleus.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@Code Jam</a>, 
                    and previously <a href="https://designconsultancy.ssmu.ca/" className="font-semibold cursor-pointer hover:text-accent-500 transition-colors duration-150">@McGill Design Consultancy</a>.
                </span>
                <span> I have experience in web development and have been working with Python, Java, and React.js more recently. I aim to become more proficient in frameworks like Django.</span>
            </div>
            <div>
                <h3 className="sectionSubheader">Outside of coding,</h3>
                <p>
                    I enjoy listening to <a href="https://open.spotify.com/user/reiquem" target="_blank">music</a> and eating <a href="https://www.instagram.com/meoweatss/" target="_blank">good food</a>! 
                    Nowadays, I've been playing&nbsp;
                    <a 
                        href="https://open.spotify.com/track/6SdAztAqklk1zAmUHhU4N7" 
                        target="_blank"
                    >
                        Taken for a Fool
                    </a>
                    , <a 
                        href="https://open.spotify.com/track/2sewj0rFvlr3aEM3bGy12n?si=1de90b2c8aed4592" 
                        target="_blank"
                    >
                        Twice
                    </a>
                    , and <a 
                        href="https://open.spotify.com/track/6RFJUozEvISL28VHNUBWTQ?si=53b316f619ae4298" 
                        target="_blank"
                        className="hover:text-accent-500"
                    >
                        Dirtbag Transformation (Still Dirty)
                    </a> 
                    &nbsp;on repeat.
                    I've been expanding my vinyl collection!</p>
            </div>
        </section>
    )
}