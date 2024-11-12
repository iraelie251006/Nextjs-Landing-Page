import Link from "next/link"
import { Separator } from "./ui/separator"
import { Avatar } from "@mui/material"

const Channels = () => {
    const channels = [
        {
            logo: "/public/sonny.jpg",
            name: "Sonny Sangha",
            subs: "279,000",
            link: "https://www.youtube.com/@SonnySangha"
        },
        {
            logo: "/public/jsm.jpeg",
            name: "Javascript Matery",
            subs: "987,000",
            link: "https://www.youtube.com/@javascriptmastery"
        },
        {
            logo: "/public/huxnWebDev.jpg",
            name: "Huxn Web Dev",
            subs: "93,000",
            link: "https://www.youtube.com/@huxnwebdev"
        },
        {
            logo: "/public/broCode.jpg",
            name: "Bro Code",
            subs: "2,270,000",
            link: "https://www.youtube.com/@BroCodez"
        }
    ]

    const style = {
        width: {
            xs: 50,
            sm: 100,
            md: 150,
            lg: 100,
            xl: 150
        },
        height: {
            xs: 50,
            sm: 100,
            md: 150,
            lg: 100,
            xl: 150
        }
    }
  return (
    <div className="text-center">
        <h1 className="pb-4 text-3xl md:text-5xl font-bold tracking-tight lg:text-6xl">Channels I&apos; ve worked with</h1>
        <div className="flex items-center justify-center">
            <Separator className="mt-4 bg-slate-100/10 h-0.5 w-40"/>
        </div>
        <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8">
            {channels.map((channel, index) => (
                <div key={index} className="mt-10 flex">
                    <div className="flex flex-col items-center">
                        <Link href={channel.link}>
                            <Avatar sx={style} src={channel.logo} alt={channel.name}/>
                        </Link>
                        <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
                        <p className="text-lg mt-2">{channel.subs}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Channels