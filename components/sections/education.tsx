export default function Education() {
    return (
        <div id="education">
            <div className="sectionHeader">
                <h2 className="sectionHeader">Education</h2>
            </div>

            <div className="sectionContent">
                <div className="mcgillUniversity">
                    <h3 className="sectionSubheader">McGill University</h3>
                    <p className="500">Bachelor of Arts in Computer Science & Sociology, Minor in Cognitive Science</p>
                    <p>August 2022 – May 2026</p>
                    <p>3.68 / 4.00 GPA</p>
                </div>

                <div className="coursework">
                    <h3 className="sectionSubheader">Coursework</h3>
                    <div className="two5050Columns">
                        <div className="educationComputerScienceColumn">
                            <p className="tableHeader">Computer Science</p>
                            {[
                                ['COMP 202: Foundations of Programming'],
                                ['COMP 206: Introduction to Software Systems'],
                                ['COMP 230: Logic & Computability'],
                                ['COMP 250: Introduction to Computer Science'],
                                ['COMP 251: Algorithms & Data Structures'],
                                ['COMP 273: Introduction to Computer Systems'],
                                ['COMP 303: Software Design'],
                                ['MATH 133: Linear Algebra'],
                                ['MATH 140: Calculus I'],
                                ['MATH 141: Calculus II'],
                                ['MATH 240: Discrete Structures'],
                            ].map(([title]) => (
                                <p className="table">{title}</p>
                            ))}
                        </div>
                        <div className="educationArtsColumn">
                            <div className="educationSociologySection">
                                <p className="tableHeader">Sociology</p>
                                {[
                                    ['SOCI 210: Sociological Perspectives'],
                                    ['SOCI 211: Sociological Inquiry'],
                                    ['SOCI 326: Introduction to Political Sociology'],
                                    ['SOCI 330: Sociological Theory'],
                                ].map(([title]) => (
                                    <p className="table">{title}</p>
                                ))}
                            </div>
                            <div className="educationCognitiveScienceSection">
                                <p className="tableHeader">Cognitive Science</p>
                                {[
                                    ['PSYC 212: Perception'],
                                ].map(([title]) => (
                                    <p className="table">{title}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="activities">
                    <h3 className="sectionSubheader">Activities</h3>
                    <div className="table">
                        {[
                            ['Hack4Impact', 'President, VP Finance'],
                            ['CodeJam13', 'Lead Designer'],
                            ['McGill Association of North American Born Asians', 'Webmaster, VP Finance'],
                            ['Arts Undergraduate Society', 'Tutor'],
                            ['Tech Fair', 'Volunteer'],
                            ['World Vision', 'VP Finance'],
                        ].map(([club, role]) => (
                            <span className="table"><span className="uppercase">{club}:&nbsp;</span>{role}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}