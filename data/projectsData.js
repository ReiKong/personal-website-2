import classwise from "../public/images/classwiseCover.png";
import recipez from "../public/images/recipezCover.png";
// import mcgilleats from "../public/images/mcgilleatsCover.png";
import emptyImage from '../public/images/empty.png'

export const projects = [
    {
        imageSrc: classwise,
        title: "ClassWise",
        projectLink: "https://classwise-97f745bcadbb.herokuapp.com/",
        githubLink: "#",
        description: "A web application for streamlined class and instructor research by students.",
        techStack: "React.js, CSS, Python, Django, PostgresSQL",
    },
    {
        imageSrc: recipez,
        title: "RecipeZ",
        projectLink: "#",
        githubLink: "#",
        description: "A web application which generates recipes using user-input ingredients",
        techStack: "JavaScript, Tailwind CSS, Python, React.js",
    },
    {
        imageSrc: emptyImage,
        title: "McGill Eats",
        projectLink: "#",
        githubLink: "#",
        description: "A web application that displays restaurants, cafés, dining halls, and vending machines around McGill University",
        techStack: "React.js, JavaScript, CSS, Python, Django",
    },
];