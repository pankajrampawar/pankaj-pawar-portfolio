import Image from "next/image"
import menu from '@/public/menu.svg'

export default function Menu() {
    return (
        <div className="flex justify-end py-5 border-b border-theme bg-black">
            <div className="">
                <Image
                    src={menu}
                    alt="menu"
                    width={41}
                    height={19}
                />
            </div>
        </div>
    )
}