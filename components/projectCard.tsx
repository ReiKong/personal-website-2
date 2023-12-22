export default function projectCard({
    imageSrc,
    title,
    projectLink,
    githubLink,
    description,
    techStack
}: {
    imageSrc: string;
    title: string;
    projectLink: string;
    githubLink: string;
    description: string;
    techStack: string;
}) {
    return (
        <div className="flex-col justify-start items-start gap-2.5 inline-flex border-secondary1 border-[1px] border-collapse mt-[-1px] mr-[-1px]">
            <div></div>
            <div className="px-2.5 pb-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <p className="font-medium text-[20px]">{title}</p>
                <p className="text-secondary2">{description}</p>
                <p>{techStack}</p>
            </div>
        </div>
    )
}