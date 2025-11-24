"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "./Box";

export default function Projects() {
    return (
        <div id="projects" className="h-screen">
            <div className="flex flex-col  justify-center items-center text-center pt-60 pb-20">
                <div>
                    <div>
                        <div className="flex flex-col xl:flex-row items-center mb-8">
                            <h1 className="text-xl xl:mx-4 font-semibold mb-2 xl:mb-0">
                                Projects
                            </h1>
                            <div className="xl:block bg-black w-[300px] h-px"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Box />
        </div>
    );
}
