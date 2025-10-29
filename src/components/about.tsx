import Image from "next/image";
import Avatar from "../../public/Avatar.png";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col xl:flex-row  justify-center items-center text-center py-20 h-screen"
        >
            <div>
                <div className="flex flex-col xl:flex-row ml-4 ">
                    <h1 className="text-xl xl:ml-10 xl:mr-4 font-semibold mb-2">
                        About
                    </h1>
                    <div className="xl:py-3.5 m-auto xl:m-0">
                        <div className=" bg-black w-[300] h-px"></div>
                    </div>
                </div>

                <p className="xl:text-left xl:max-w-md indent-3 mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Provident corrupti illo culpa, perspiciatis sapiente unde
                    impedit harum quas et veritatis rem vero consequuntur
                    officia fuga, nobis autem libero id amet?Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. In animi ex provident
                    et eos, impedit molestias, dicta molestiae totam cumque
                    corrupti! Quod ratione excepturi voluptate! Est magni eaque
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi, illo aut. Odio voluptatibus rem eum veniam, nulla
                    vitae voluptates ipsam iste numquam, obcaecati sint dolore
                    repellat architecto quisquam delectus provident! laudantium?
                    Nam?
                </p>
            </div>
            <Image
                src={Avatar}
                alt="Profile Picture"
                width={280}
                height={280}
                className=" rounded-xl mt-6 ml-10 xl:flex hidden"
            />
        </section>
    );
}
