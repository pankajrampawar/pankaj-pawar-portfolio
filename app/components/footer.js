import Image from "next/image"
import facebookLogo from '@/public/facebook-logo.svg'
import linkedinLogo from '@/public/linkedin-logo.svg'
import xLogo from '@/public/x-logo.svg'

export default function Footer() {
    return (
        <div className="flex flex-col gap-5 px-5 py-10 lg:px-36">
            <div className="flex justify-end">
                <div className="border-b border-theme flex justify-end w-[500px] max-w-[500px]">
                    <input
                        placeholder="Message"
                        alt="message"
                        type="text"
                        className="footer w-full text-xl py-2 focus:outline-none text-white placeholder:text-white"
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="border-b border-theme w-[500px] max-w-[500px]">
                    <input
                        placeholder="Your email"
                        alt="email"
                        type="email"
                        className="footer w-full text-xl py-2 focus:outline-none text-white placeholder:text-white"
                    />
                </div>
            </div>
            
            <div className="mt-1 flex flex-col items-end">
                <button className="text-xl md:text-2xl bg-theme p-2 rounded-xl text-black">Send</button>
                <div className="text-xs lg:text-base max-w-40 lg:max-w-60 mt-2">
                    You can expect a reply withing 12 hours of messaging
                </div>
            </div>
            <div className="flex flex-col  gap-3 text-3xl">
                <div>
                    Connect
                </div>
                <div className="flex gap-5 pl-2">
                    <Image
                        src={linkedinLogo}
                        alt={"linkedin logo"}
                        width={40}
                        height={40}
                        className={''}
                    />
                    <Image
                       src={xLogo}
                       alt={'x logo'}
                       width={40}
                       height={40}
                       className={''} 
                    />
                    <Image
                        src={facebookLogo}
                        alt={'facebook-logo'}
                        width={40}
                        height={40}
                        className={''}
                    />
                </div>
            </div>
        </div>
    )
}