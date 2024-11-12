import { InlineWidget } from "react-calendly"
import { Separator } from "./ui/separator"
const Calendly = () => {
  return (
    <div className="text-center" id="calendly">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Ready To Transform Your Content? <br /> Book a Free Editing Consultation Below!</h1>
        <div className="flex items-center justify-center">
            <Separator className="mt-8 bg-slate-100/20 h-0.5 w-40"/>
        </div>
        <InlineWidget url="https://calendly.com/niyubwayoiraelie5777/30min" styles={{height: "1000px", "borderRadius": "5px"}}/>
    </div>
  )
}

export default Calendly