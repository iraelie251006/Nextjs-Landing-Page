import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Particles } from "./particles"


const Hero = () => {
  return (
    <div className="pt-2">
        <Particles className="absolute inset-0 -z-10"/>
        <div className="text-center px-8">
            <div className="mb-6" data-aos="fade-down">
                <div className="relative inline-flex before:absolute before:inset-0">
                    <Link href={"https://www.linkedin.com/in/niyubwayo-irakoze-elie-14b003284/"} className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40" target="_blank">
                    <span className="relative inline-flex items-center">
                        My Socials {" "}
                        <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform
                        duration-150 ease-in-out ml-1">
                            <ArrowRight className="w-4 h-4"/>
                        </span>
                    </span>
                    </Link>
                </div>
            </div>
            <h1 className="pb-4 font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500 sm:text-5xl text-3xl" data-aos="fade-down">
                Hey <span className="text-yellow-400">👋</span> there I&apos;m Elie
            </h1>
            <p className="mb-8 text-lg lg:text-2xl text-zinc-300/40 font-medium dark:text-gray-400" data-aos="fade-down" data-aos-delay="200">
                Web dev made Easy
            </p>
            <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:justify-center sm:flex-row sm:inline-flex" data-aos="fade-down" data-aos-delay="400">
                <Link href={"#calendly"} className="w-96 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded-full px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group">
                Book a free call {" "}
                <ArrowRight className="w-4 h-4 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero