
export default function Navbar() {
    return (
        <div className="text-white bg-black flex justify-end text-[27px] gap-10 p-8">
            <div className=" nav-hover relative cursor-pointer">
                <span>About</span>
            </div>
            
            <div className="nav-hover relative cursor-pointer">
                <span>Skills</span>
            </div>

            <div className="nav-hover relative cursor-pointer">
                <span>Work samples</span>
            </div>

            <div className="nav-hover relative cursor-pointer">
                <span>Contact</span>
            </div>
        </div> 
    )
}