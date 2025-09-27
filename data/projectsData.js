import openCourse from "../public/images/OpenCourseCover.png"
import myBookings from "../public/images/MyBookingsCover.png"
import architectureVerbListGen from "../public/images/ArchitectureVerbListGeneratorCover.png"
import classwise from "../public/images/classwiseCover.png";
import recipez from "../public/images/recipezCover.png";
import mcgillEats from "../public/images/mcgilleatsCover.png";
import emptyImage from '../public/images/empty.png'

export const projects = [
    {
        imageSrc: myBookings,
        year: 2024, 
        title: "myBookings",
        links: [["#", "Demo"]],
        projectLink: "#",
        githubLink: "https://github.com/jateen67/comp307finalproject",
        description: "A platform designed to simplify the process of scheduling appointments and meetings within McGill's School of Computer Science. myBookings enables users to create and manage recurring or one-time bookings, share unique URLs, and provide features like meeting polls, notifications, and centralized appointment tracking.",
        techStack: "React.js, Express.js, Node.js, PostgreSQL, JavaScript, Microsoft Azure",
    },
    {
        imageSrc: architectureVerbListGen,
        year: 2024, 
        title: "Architecture Verb List Generator",
        links: [["#", "Demo"]],
        projectLink: "https://architecture-verb-list.netlify.app/",
        githubLink: "https://github.com/ReiKong/architecture-verb-list-generator",
        description: "A pedagogical tool made for 25+ Year 1 Architecture students at the National University of Singapore. Students select one verb that describes architecture and click \"Generate\" to receive a random verb. They use this combination to develop a project that revolves around the verbs.",
        techStack: "TypeScript",
    },
    {
        imageSrc: openCourse,
        year: 2024, 
        title: "OpenCourse",
        links: [["#", "Demo"]],
        projectLink: "#",
        githubLink: "https://github.com/jateen67/open-course",
        description: "A service designed to provide a way for students of Concordia University to know exactly when course seats open up. By automating this process, students will no longer have to worry about going to VSB Concordia and constantly refreshing until their desired course opens up.",
        techStack: "React.js, TypeScript, Go, PostgreSQL, MongoDB, Docker, Microsoft Azure, Twilio",
    },
    {
        imageSrc: classwise,
        year: 2023, 
        title: "ClassWise",
        links: [["https://classwise-97f745bcadbb.herokuapp.com/", "Demo"]],
        projectLink: "https://classwise-97f745bcadbb.herokuapp.com/",
        githubLink: "#",
        description: "A web application for streamlined class and instructor research by students.",
        techStack: "React.js, CSS, Python, Django, PostgreSQL",
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