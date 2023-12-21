export default function projectCard({
    imageSrc,
    title,
    projectLink,
    githubLink,
    description,
    techStack
}) {
    return (
        <div class="border border-secondary1 flex-col justify-start items-start gap-2.5 inline-flex">
            <div></div>
            <div class="px-2.5 pb-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <p class="font-medium text-[20px]">{title}</p>
                <p class="text-secondary2">{description}</p>
                <p>{techStack}</p>
            </div>
        </div>
    )
}