export default function Skills() {
    return (
        <div className="flex flex-col items-center gap-8 py-20 lg:py-36 lg:flex-row lg:gap-0 lg:justify-center">
            <div className="text-3xl lg:-rotate-90 lg:text-9xl">
                Skills
            </div>
            <div className="text-2xl lg:text-5xl w-full flex flex-col lg:-ml-14 lg:max-w-[750px]">
                <div className="py-2 border-b border-skill hover:bg-theme hover:text-black px-2 transition-all duration-300 ease-in-out cursor-none">
                    Web Development
                </div>
                <div className="py-2 border-b border-skill px-2 hover:bg-theme hover:text-black transition-all duration-300 ease-in-out cursor-none">
                    Web Design
                </div>
                <div className="py-2 border-b border-skill px-2 hover:bg-theme hover:text-black transition-all duration-300 ease-in-out cursor-none">
                    Backend Programming
                </div>
                <div className="py-2 border-b border-skill px-2 hover:bg-theme hover:text-black transition-all duration-300 ease-in-out cursor-none">
                    Mobile App Development
                </div>
                <div className="py-2 border-b border-skill px-2 hover:bg-theme hover:text-black transition-all duration-300 ease-in-out cursor-none">
                    Database Management
                </div>
            </div>
        </div>
    )
}