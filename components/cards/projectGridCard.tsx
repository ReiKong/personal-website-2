import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from 'react';
import emptyImage from '../../public/images/empty.png';

export default function projectGridCard({
    imageSrc,
    title,
    projectLink,
    githubLink,
    description,
    techStack
}: {
    imageSrc: string | StaticImageData;
    title: string;
    projectLink: string;
    githubLink: string;
    description: string;
    techStack: string;
}) {
    
    const [show, setShow] = useState(true);
    const [fill, setFill] = useState(false);

    useEffect(() => {
        if (typeof imageSrc === 'string' && (imageSrc === "../public/images/hash.png" || imageSrc === emptyImage.src)) {
            setShow(false);
            setFill(true);
        } else {
            setShow(true);
            setFill(false);
        }
    }, [imageSrc]);

    return (
        <div className="flex-col justify-start items-start gap-2.5 border-secondary1 border border-collapse mt-[-1px] mr-[-1px]">
            <div className={`h-[200px] inline ${fill ? 'bg-secondary1' : ''}`}>
                <Image
                src={imageSrc}
                className={`contain ${!show ? 'hidden' : ''}`}
                placeholder="blur"
                alt={title} />
            </div>
            <div className="px-2.5 pt-2.5 pb-2.5 flex flex-col justify-start items-start gap-4 border-t border-t-secondary1">
                <p className="font-medium text-[20px]">{title}</p>
                <p className="text-secondary2">{description}</p>
                <p>{techStack}</p>
            </div>
        </div>
    )
}