import YouTube from "react-youtube";
import { Separator } from "./ui/separator";

const EditedVideos = () => {
    const VideoOptions = {
        playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1,
        },
        width: '400',
        height: '270',
        className: 'rounded-xl'
    }
  return (
    <div className="text-center">
        <h1 className="pb-4 font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl ">Recommended Videos</h1>
        <div className="flex items-center justify-center">
            <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40"/>
        </div>

        <div className="flex justify-center">
            <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                <YouTube opts={VideoOptions} videoId="cso7-4oAPNQ"/>
                <YouTube opts={VideoOptions} videoId="zeCDuo74uzA"/>
                <YouTube opts={VideoOptions} videoId="lie0cr3wESQ"/>
                <YouTube opts={VideoOptions} videoId="EtG0tv2a9Uw"/>
            </div>
        </div>
    </div>
  )
}

export default EditedVideos;