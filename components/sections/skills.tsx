export default function Skills() {
    return (
        <section id="skills">
            <div className="sectionHeader">
                <h2 className="sectionHeader">Skills</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] w-[100%] gap-y-8">
                <div className="flex flex-1 flex-col items-start gap-y-[4px]">
                    <h3 className="sectionSubheader">Programming Languages</h3>
                    {[
                        ['Java'],
                        ['Python'],
                        ['HTML/CSS'],
                        ['Bash'],
                        ['JavaScript'],
                        ['C'],
                        ['TypeScript'],
                        ['Assembly'],
                    ].map(([skill]) => (
                        <p className="table">{skill}</p>
                    ))}
                </div>
                <div className="flex flex-1 flex-col items-start gap-y-[4px]">
                    <h3 className="sectionSubheader">Tools & Technologies</h3>
                    {[
                        ['Git'],
                        ['React.js'],
                        ['Next.js'],
                        ['Bash'],
                        ['Linux/Unix'],
                    ].map(([skill]) => (
                        <p className="table">{skill}</p>
                    ))}
                </div>
                <div className="flex flex-1 flex-col items-start gap-y-[4px]">
                    <h3 className="sectionSubheader">Other</h3>
                    {[
                        ['Figma'],
                        ['Adobe XD'],
                        ['Adobe Photoshop'],
                        ['Adobe Illustrator'],
                    ].map(([skill]) => (
                        <p className="table">{skill}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}