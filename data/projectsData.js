import classwise from "../public/images/classwiseCover.png";
import recipez from "../public/images/recipezCover.png";
import mcgillEats from "../public/images/mcgilleatsCover.png";
import emptyImage from '../public/images/empty.png'

export const projects = [
    {
        imageSrc: classwise,
        year: 2023, 
        title: "ClassWise",
        links: [["https://classwise-97f745bcadbb.herokuapp.com/", "Demo"]],
        projectLink: "https://classwise-97f745bcadbb.herokuapp.com/",
        githubLink: "#",
        description: "A web application for streamlined class and instructor research by students.",
        techStack: "React.js, CSS, Python, Django, PostgresSQL",
    },
    {
        imageSrc: recipez,
        title: "RecipeZ",
        year: 2022, 
        projectLink: "#",
        githubLink: "#",
        description: "A web application which generates recipes using user-input ingredients",
        techStack: "JavaScript, Tailwind CSS, Python, React.js",
    },
    {
        imageSrc: mcgillEats,
        title: "McGill Eats",
        year: 2023, 
        projectLink: "#",
        githubLink: "#",
        description: "A web application that displays restaurants, cafés, dining halls, and vending machines around McGill University",
        techStack: "React.js, JavaScript, CSS, Python, Django",
    },
];