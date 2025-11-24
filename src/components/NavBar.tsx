import Image from "next/image";
import JeiiLogo from "../../public/jeiilogo.svg";

export default function Nav() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            <div className="flex flex-row items-center justify-center xl:justify-between px-0 py-4 ">
                <Image
                    className=" ml-4  justify-center"
                    src={JeiiLogo}
                    alt="logo"
                    width={200}
                    height={200}
                />
                <div className="hidden xl:flex">
                    <nav className=" flex items-center">
                        <ul className=" flex space-x-4 mr-3 font-x">
                            <li>
                                <a
                                    className="px-2 py-0.5 hover:bg-gray-400 hover:rounded-[5px] transition-colors duration-200"
                                    href="#"
                                >
                                    /Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-2 py-0.5 hover:bg-gray-400 hover:rounded-[5px] transition-colors duration-200"
                                    href="#about"
                                >
                                    /About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-2 py-0.5 hover:bg-gray-400 hover:rounded-[5px] transition-colors duration-200"
                                    href="#projects"
                                >
                                    /Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-2 py-0.5 hover:bg-gray-400 hover:rounded-[5px] transition-colors duration-200"
                                    href="#skills"
                                >
                                    /Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-2 py-0.5 hover:bg-gray-400 hover:rounded-[5px] transition-colors duration-200"
                                    href="#contact"
                                >
                                    /Contact
                                </a>
                            </li>
                        </ul>
                        <div className=" hidden md:block sm:block lg:block xl:flex bg-black w-[30px] h-px"></div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
