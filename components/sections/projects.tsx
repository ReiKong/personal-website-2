import ProjectCard from "../projectCard";
import { projects } from "../../data/projectsData";

export default function Projects() {
    return (
        <div id="projects">
            <div className="sectionHeader">
                <h2 className="sectionHeader">Projects</h2>
            </div>
            <div className="sectionContent">
                <div className="grid grid-cols-3 divide-x-[1px] divide-secondary1 border-y-[1px] border-x-[1px] border-secondary1">
                    {projects?.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    )
}