"use client";

import ProjectListCard from "../cards/projectListCard";
import ProjectGridCard from "../cards/projectGridCard";
import { projects } from "../../data/projectsData";
import { useState, useEffect } from "react";
import { BsFillGridFill, BsFillGrid3X3GapFill, BsList } from "react-icons/bs";

export default function Projects() {
    const [grid, setGrid] = useState('grid');
    const [list, setList] = useState('hidden')
    const [gridClick, setGridClick] = useState('text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary')
    const [listClick, setListClick] = useState('text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary')


    const gridLayout = () => {
        setGrid('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');
        setList('hidden');
        setGridClick('text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary')
        setListClick('text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary')
    }

    const listLayout = () => {
        setGrid('hidden');
        setList('');
        setListClick('text-primary bg-secondary1 hover:bg-secondary1 hover:text-primary')
        setGridClick('text-secondary1 bg-primary hover:bg-secondary1 hover:text-primary')
    }

    useEffect(() => {
        const screenSize = window.innerWidth;                                                               // Adjust default view upon load depending on viewport
        if (screenSize > 640) {
            gridLayout();
          } else {
            listLayout();
          }
    }, []);

    return (
        <section id="projects">
            <div className="w-full">
                <div className="sectionHeader flex flex-row justify-between">
                    <h2 className="sectionHeader">Projects</h2>
                </div>

                <div className="flex flex-row align-middle items-center border-b border-b-secondary1">
                    <div className={`flex flex-row align-middle border-r border-r-secondary1 cursor-pointer ${gridClick} pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200`}
                        onClick={gridLayout}>
                        <BsFillGridFill className="text-[20px]" />
                        Grid
                    </div>
                    <span className={`flex flex-row align-middle border-r border-r-secondary1 cursor-pointer ${listClick} pt-2 pb-1 pr-2 px-1 gap-x-2 transition duration-200 !important`}
                        onClick={listLayout}
                    >
                        <BsList className="text-[20px]" />
                        List
                    </span>
                </div>
            </div>
            
            <div className="sectionContent">
                <div className={`${grid}`}>
                    {projects?.map((project, index) => (
                        <ProjectGridCard key={index} {...project} />
                    ))}
                </div>
                <div className={`w-[100%] ${list}`}>
                    <div className="grid listCols border-b-[1px] border-b-secondary1 gap-x-[10px]">
                        {[
                            ['Year'],
                            ['Project Name'],
                            ['Tech Stack'],
                            ['GitHub'],
                            ['Demo'],
                        ].map(([content], index) => (
                            <p 
                                key={index}
                                className={`{text-secondary1 transition duration-200 font-semibold text-lg uppercase w-full md:${index == 1 && 'md:hidden'}`}>{content}</p>
                        ))}
                    </div>
                    {projects?.map((project, index) => (
                        <ProjectListCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}