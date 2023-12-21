import ProjectCard from "../projectCard";
import { projects } from "../../data/projectsData";

export default function Projects() {
    return (
        <div className="grid grid-cols-3">
            {projects?.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}