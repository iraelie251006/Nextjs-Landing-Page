import { Email, Instagram, LinkedIn, X} from "@mui/icons-material"
import Link from "next/link"

const Footer = () => {
    const links = [
        {
            href: "https://x.com/Iraelie91485",
            icons: <X className="h-8 w-8"/>
        },
        {
            href: "https://www.instagram.com/irakoze8654/",
            icons: <Instagram className="h-9 w-9"/>
        },
        {
            href: "https://www.linkedin.com/in/niyubwayo-irakoze-elie-14b003284/",
            icons: <LinkedIn className="h-8 w-8"/>
        },
        {
            href: "mailto:niyubwayoiraelie5777@gmail.com",
            icons: <Email className="h-8 w-8"/>
        },
    ]
  return (
    <div className="text-center pb-8">
        <div className="flex items-center justify-center space-x-4">
            {links.map((link, index) => (
                <Link key={index} href={link.href} className="hover:opacity-45 transition duration-300">
                    {link.icons}
                </Link>
            ))}
        </div>
        <div className="text-center mt-2">
            <p className="text-sm text-slate-100/50">niyubwayoiraelie5777@gmail.com</p>
            <p className="text-sm text-slate-100/50">© Elie. all rights reserved</p>
        </div>
        
    </div>
  )
}

export default Footer