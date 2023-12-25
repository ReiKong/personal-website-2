export default function ProjectListCard({
    title,
    projectLink,
    githubLink,
    description,
    techStack
}: {
    title: string;
    projectLink: string;
    githubLink: string;
    description: string;
    techStack: string;
}) {
    return (
        <div className="grid grid-cols-4 border-b border-b-secondary3 pt-[4px] gap-x-[10px]">
            <span>{title}</span>
            <span>{techStack}</span>
            <a href={githubLink} className="text-secondary1"> GitHub </a>
            <a href={projectLink} className="text-secondary1"> Demo </a>
        </div>
    )
}