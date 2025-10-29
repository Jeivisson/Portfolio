import Image from "next/image";
import Projectbg from "../../public/projectbg.png";

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col  justify-center items-center text-center py-20 h-screen"
        >
            <div>
                <div className="flex flex-col xl:flex-row items-center mb-8">
                    <h1 className="text-xl xl:mx-4 font-semibold mb-2 xl:mb-0">
                        Projects
                    </h1>
                    <div className="xl:block bg-black w-[300px] h-px"></div>
                </div>
            </div>
            <div className="flex-[0_0_100%] md:flex-[0_0_(100%/3)] px-2">
                <article className="rounded-2xl bg-gray-200 min-w-0 p-0 pb-5 w-full">
                    <div className="relative w-full mb-20">
                        {/* Lembrar de por  https://www.npmjs.com/package/embla-carousel*/}
                        <Image
                            width={300}
                            height={300}
                            src={Projectbg}
                            alt="Imagem"
                            className="rounded-t-2xl object-cover"
                        />
                    </div>
                    {/* Exemplos de botão */}
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-xl">
                        View Project
                    </button>
                    <button className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-xl ">
                        Source Code
                    </button>
                </article>
            </div>
        </section>
    );
}
