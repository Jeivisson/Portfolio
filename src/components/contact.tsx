import { IoIosMail } from "react-icons/io";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col justify-center items-center text-center py-20 h-screen"
        >
            <div>
                <div className="flex flex-col xl:flex-row items-center mb-8">
                    <h1 className="text-xl xl:mx-4 font-semibold mb-2 xl:mb-0">
                        Contact
                    </h1>
                    <div className="xl:block bg-black w-[300px] h-px"></div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="max-w-md text-center">
                        Interested in collaborating or have a question?
                    </p>

                    <div className="flex items-center justify-center gap-2 mt-2">
                        <IoIosMail className="text-2xl" />
                        <a
                            href="mailto:jeivisson@live.com"
                            className="text-blue-500 underline"
                        >
                            jeivisson@live.com
                        </a>
                    </div>

                    <a
                        href="#"
                        className="mt-4 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        CV Download
                    </a>
                </div>
            </div>
        </section>
    );
}
