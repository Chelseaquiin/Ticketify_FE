export const Navbar = () => {
    return(
        <nav className="w-full h-15 px-5 py-10 md:px-40 pb-50 flex justify-between items-center">
            <h1 className="text-4xl">
                Ticketify
            </h1>
            <ul className="font-medium">
                <li className="hover:text-white hover:scale-105 duration-200 ease-in relative">
                    <a href="#booking" className="after:absolute after:bottom-0 after:left-0 after:h-1 after:space-y-4 after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full">BOOK A FLIGHT</a>
                </li>
            </ul>
        </nav>
    )
}