import { FaFacebookF, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"
import { RiInstagramFill, RiInstallLine } from "react-icons/ri"


export const Footer = () => {
    return(
        <footer className="w-full h-auto bg-white flex gap-y-10 text-[#010149] flex-col md:flex-row justify-between items-start md:items-center px-5 py-10 md:px-40">
            <section className="space-y-4">
                <h1 className="text-4xl">
                    Ticketify
                </h1>
                <p>
                    Enabling you reach your dream destination.
                </p>
            </section>
            <section>
                <ul className="space-y-4">
                    <li>Book Flight</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
            </section>
            <section className="space-y-4">
                <h3>
                    Follow Us
                </h3>
                <div className="flex gap-x-4">
                    <span> <FaFacebookSquare /> </span>
                    <span> <FaSquareXTwitter /> </span>
                    <span> <RiInstagramFill /> </span>
                </div>
            </section>
        </footer>
    )
}