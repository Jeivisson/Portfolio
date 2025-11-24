import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className=" opacity-100 absolute md:fixed top-1/2 -translate-y-1/2 left-0  bg-gray-100 shadow-xl rounded-r-2xl  cursor-pointer flex flex-col items-center justify-center space-y-6 z-40">
            <div className="p-2">
                <nav>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="https://www.linkedin.com/in/jeivisson/"
                                className=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={25} color="#0e76a8" />
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="https://github.com/jeivisson"
                                className=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={25} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
