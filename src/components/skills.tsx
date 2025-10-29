import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col  justify-center items-center text-center py-20 h-screen "
        >
            <section id="skills">
                <div className="grid grid-cols-3 gap-6 text-center">
                    <a
                        className="cursor-pointer"
                        href="https://react.dev/"
                        target="_blank"
                    >
                        <FaReact size={40} className="m-auto" />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://nodejs.org/en"
                        target="_blank"
                    >
                        <FaNodeJs size={40} className="m-auto" />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://www.postgresql.org/"
                        target="_blank"
                    >
                        <BiLogoPostgresql size={40} className="m-auto" />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://tailwindcss.com/"
                        target="_blank"
                    >
                        <RiTailwindCssFill size={40} className="m-auto" />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://nextjs.org/"
                        target="_blank"
                    >
                        <RiNextjsFill size={40} className="m-auto" />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://docs.github.com/"
                        target="_blank"
                    >
                        <FaGithub size={40} className="m-auto" />
                    </a>
                </div>
            </section>
        </section>
    );
}
