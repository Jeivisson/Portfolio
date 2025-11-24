"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const projectsMock = [
    {
        imageSoucer: "/projectbg.jpg",
        projectLink: "https://example./project",
        sourceCodeLink: "https://example./sourcecode",
    },
    {
        imageSoucer: "/projectbg1.jpg",
        projectLink: "https://example./project1",
        sourceCodeLink: "https://example./sourcecode1",
    },
    {
        imageSoucer: "/projectbg2.jpg",
        projectLink: "https://example./project2",
        sourceCodeLink: "https://example./sourcecode2",
    },
    {
        imageSoucer: "/projectbg.jpg",
        projectLink: "https://example./project2",
        sourceCodeLink: "https://example./sourcecode2",
    },
    // {
    //     imageSoucer: "/projectbg.jpg",
    //     projectLink: "https://example./project2",
    //     sourceCodeLink: "https://example./sourcecode2",
    // },
    // {
    //     imageSoucer: "/projectbg2.jpg",
    //     projectLink: "https://example./project2",
    //     sourceCodeLink: "https://example./sourcecode2",
    // },
    // {
    //     imageSoucer: "/projectbg2.jpg",
    //     projectLink: "https://example./project2",
    //     sourceCodeLink: "https://example./sourcecode2",
    // },
];

export default function Box() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {
                slidesToScroll: 3,
            },
        },
    });
    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {projectsMock.map((project, index) => (
                    // Resolver porque está mostrando mais de 3 projetos na tela
                    <div key={index} className="w-full md:w-1/3 px-2">
                        <article className="rounded-2xl bg-gray-200 min-w-0 pb- w-[300px] mx-auto h-full flex flex-col  ">
                            <div className="flex items-center justify-between ">
                                <div>
                                    <Image
                                        src={project.imageSoucer}
                                        alt="Project Image"
                                        width={300}
                                        height={300}
                                        className="rounded-t-2xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-row flex w-full justify-between mt-4 mb-2">
                                <button className=" ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    <a
                                        href={project.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </button>
                                <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    <a
                                        href={project.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Source
                                    </a>
                                </button>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}
