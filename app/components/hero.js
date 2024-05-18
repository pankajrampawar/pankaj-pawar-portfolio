'use client'
import { useEffect } from "react"
import Image from "next/image"
import pankajPic from '@/public/pankajpic.jpg'

export default function Hero() {

    useEffect(() => {
        const timer = setTimeout(() => {
            const boxifyElement = document.querySelector('.boxify');
            const pseudoBorder = document.querySelector('.pseudoBorder');
            const textToColor = document.querySelector('.yellow-text');
            const paraToColor = document.querySelector('.yellow-para');
            boxifyElement.classList.add('expanded');
            pseudoBorder.classList.add('expanded');
            textToColor.classList.add('colored');
            paraToColor.classList.add('colored')
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="text-white flex py-10">
            <div className="flex-1 flex flex-col gap-8 lg:gap-10 items-center text-center md:items-start md:text-left ">
                <div className="text-[33px] lg:text-5xl">
                    <div>Hi! I am Pankaj</div>
                    <div className="-mt-3 sm:mt-0">Website <span className="yellow-text">Developer</span></div>
                </div>

                <div className="lg:hidden boxify relative md:hidden">
                    <div className="relative">
                        <Image
                            src={pankajPic}
                            alt="my image"
                            height={205}
                            width={184}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-lg lg:text-2xl">
                        Freelancer by profession, tech nerd at heart, and design freak by nature—I specialize in <span className="yellow-para">breathing life into your ideas </span>digitally, with elegance, transparency, and pixel-perfect precision. Your hunt for website developers ends here.
                    </div>
                    <div>
                        <button className="bg-theme text-black p-2 text-2xl lg:text-3xl rounded-2xl mt-6 lg:mt-10">Contact me</button>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center">
                <div className="relative pseudoBorder">
                            <Image
                                src={pankajPic}
                                alt="my image"
                                height={205}
                                width={184}
                                className="relative z-10 lg:hidden"
                            />
                            <Image
                                src={pankajPic}
                                alt="my image"
                                height={352}
                                width={323}
                                className="relative z-10 hidden lg:block"
                            />
                        </div>
                </div>
        </div>
    )
}