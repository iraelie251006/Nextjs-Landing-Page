import YouTube from "react-youtube"
import { Separator } from "./ui/separator"

const EditedShorts = () => {
    const ShortsOptions = {
        playerVars: {
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            mute: 1,
            loop: 1,
            rel: 0,
        },
        width: '370',
        height: '450',
        className: 'rounded-xl'
    }
  return (
    <div className="text-center">
        <h1 className="pb-4 font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl">Recommended Shorts</h1>
        <div className="flex items-center justify-center">
            <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40"/>
        </div>
        <div className="flex justify-center">
            <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                <YouTube opts={ShortsOptions} videoId="piFDfCaISk8"/>
                <YouTube opts={ShortsOptions} videoId="QWSoyymrtTQ"/>
                <YouTube opts={ShortsOptions} videoId="woT5gb1L38g"/>
                <YouTube opts={ShortsOptions} videoId="9eUqGe3ycCo"/>
            </div>
        </div>
    </div>
  )
}

export default EditedShorts