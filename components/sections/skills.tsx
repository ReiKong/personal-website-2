export default function Skills() {
    return (
        <div id="skills">
            <div className="sectionHeader">
                <h2 className="sectionHeader">Skills</h2>
            </div>
            <div className="three333333Columns">
                <div className="child33Column">
                    <h3 className="sectionSubheader">Programming Languages</h3>
                </div>
                <div className="child33Column">
                    <h3 className="sectionSubheader">Tools & Technologies</h3>
                </div>
                <div className="child33Column">
                    <h3 className="sectionSubheader">Other</h3>
                </div>
            </div>
            <div className="three333333Columns">
                <div className="child33Column">
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
                <div className="child33Column">
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
                <div className="child33Column">
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
        </div>
    )
}