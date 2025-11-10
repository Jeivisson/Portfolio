"use client";

import { FaArrowAltCircleUp } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="
                        fixed bottom-6 right-6 "
                >
                    <FaArrowAltCircleUp size={30} />
                </button>
            )}
        </>
    );
}
