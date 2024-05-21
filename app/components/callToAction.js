'use client'

import { useRef, useState, useEffect } from "react"

export default function CallToAction() {

    const textRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isElementInViewport(textRef.current) && !isVisible) {
                console.log("opacity changing")
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [isVisible]);

    const isElementInViewport = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    return (
        <div ref={textRef} className={`relative flex flex-col gap-6 lg:gap-10 text-3xl lg:text-5xl items-center text-center py-10 lg:py-36`}>
            <div className={`duration-500 transition-all ${isVisible ? "opacity-100" : "opacity-0"}`}>
                Let's breath digital life into your ideas
            </div>

            <div className={`duration-[2500ms] transition-all  ${isVisible ? "opacity-100 text-theme" : "opacity-0"}`}>
                Let's work together
            </div>
        </div>
    )
}