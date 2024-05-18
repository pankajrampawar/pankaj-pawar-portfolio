import Image from "next/image"
import arrow from "@/public/arrow.svg"

export default function Samples() {
    return (
        <div className="flex items-center flex-col gap-5 py-10 lg:py-36">
            <div className="text-3xl lg:text-5xl">
                Work Samples
            </div>

            <div className="flex justify-between items-center w-full">
                <div className="rotate-180">
                    <Image
                        src={arrow}
                        alt="right arrow"
                        height={42}
                        width={42}
                    />
                </div>

                <div className="flex flex-col items-center w-full">
                    <div>
                        Main Image
                        Main Image
                        Main Image
                        Main Image
                        Main Image
                        Main Image
                    </div>
                    <div>
                        description
                    </div>
                </div>

                <div>
                    <Image
                        src={arrow}
                        alt="right arrow"
                        height={42}
                        width={42}
                    />
                </div>
            </div>
        </div>
    )
}