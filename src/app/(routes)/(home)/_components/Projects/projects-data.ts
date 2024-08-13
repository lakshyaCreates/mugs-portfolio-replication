export enum Category {
    "All" = "All",
    "UI/UX" = "UI/UX",
    "Web Design" = "Web Design",
    "App Design" = "App Design",
    "Graphic Design" = "Graphic Design",
}

export const categories = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
];

export type ProjectDataProps = {
    title: string;
    url: string;
    image: string;
    category: Category;
};

export const data: ProjectDataProps[] = [
    {
        title: "AirCalling Landing Page Design",
        url: "/",
        image: "/images/projects/aircalling-design.png",
        category: Category["Web Design"],
    },
    {
        title: "Banner Design",
        url: "/",
        image: "/images/projects/aircalling-design.png",
        category: Category["Graphic Design"],
    },
    {
        title: "Car App Interface Design",
        url: "/",
        image: "/images/projects/aircalling-design.png",
        category: Category["UI/UX"],
    },
    {
        title: "Business Landing Page Design",
        url: "/",
        image: "/images/projects/business-design.png",
        category: Category["Web Design"],
    },
    {
        title: "Ecom Web Page Design",
        url: "/",
        image: "/images/projects/ecom-design.png",
        category: Category["Web Design"],
    },
    {
        title: "App Design Tab Testing",
        url: "/",
        image: "/images/projects/business-design.png",
        category: Category["App Design"],
    },
];
