import Chip from "../Chip";

export default function ExperienceCard({
    time,
    role,
    company,
    responsibilities,
    techStack,
} : {
    time : string;
    role : string;
    company : string;
    responsibilities : string[][];
    techStack : string[][];
}) {
    return (
        <div className="grid grid-col 1 md:grid-cols-4 gap-4">
            <div className="grid md:col-span-1">
                <p className="uppercase text-secondary2">{time}</p>
            </div>
            <div className="grid md:col-span-3">
                <p className="font-semibold text-[18px] uppercase mb-2">{role} @ {company}</p>
                {responsibilities.map(([responsibility], index) => (
                    <span className="text-secondary1/85" key={index}>{responsibility}.</span>
                ))}
                <div className="flex flex-wrap gap-2 mt-3">
                    {techStack.map(([tech], index) => (
                        <Chip key={index} content={tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}