import Image from "next/image";
import JeiiLogo from "../../public/jeiilogo.svg";

export default function Nav() {
    return (
        <header className="fixed top-0 left-0 w-full">
            <div className="flex flex-row items-center justify-between px-0 py-4">
                <Image
                    className="pt-[30px] pl-2.5"
                    src={JeiiLogo}
                    alt="logo"
                    width={200}
                    height={200}
                />
                <nav className=" flex items-center ">
                    <ul className="flex space-x-4 mr-3 font-">
                        <li>
                            <a href="#">/About</a>
                        </li>
                        <li>
                            <a href="#">/Dev</a>
                        </li>
                        <li>
                            <a href="#">/Skills</a>
                        </li>
                    </ul>
                    <div className="  bg-black w-[30px] h-px"></div>
                </nav>
            </div>
        </header>
    );
}
