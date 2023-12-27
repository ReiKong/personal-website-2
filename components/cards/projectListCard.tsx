export default function ProjectListCard({
    year,
    title,
    projectLink,
    githubLink,
    description,
    techStack
}: {
    year: number;
    title: string;
    projectLink: string;
    githubLink: string;
    description: string;
    techStack: string;
}) {
    return (
        <div className={`grid listCols border-b border-b-secondary3 pt-[4px] gap-x-[10px]`}>
            <span>{year}</span>
            <span>{title}</span>
            <span>{techStack}</span>
            <a href={githubLink} target="_blank" className="text-secondary1"> GitHub </a>
            <a href={projectLink} target="_blank" className="text-secondary1"> Demo </a>
        </div>
    )
}