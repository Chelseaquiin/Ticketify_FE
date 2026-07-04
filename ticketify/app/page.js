"use client"

import { BookFlight } from "@/components/bookFlight"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"


export default function Home() {


    return(
        <main className={`w-full min-h-[100vh] bg-gray-100 font-light text-[#010149]`}>
            
            <header className="w-full min-h-[100vh] pb-50 flex flex-col justify-center items-center text-center space-y-5 backgroundOne">
                <Navbar />
                <Hero />
            </header>
            <BookFlight />
            {/* <PassengerTypeInput /> */}
            <Footer />
        </main>

  );
}
