import { experience } from "../../data/experienceData";
import ExperienceCard from "../cards/experienceCard";

export default function Experience() {
    return (
        <section id="experience">
            <div className="sectionHeader">
                <h2 className="sectionHeader">Experience</h2>
            </div>
            <div>
                <div className="">
                    {experience?.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}