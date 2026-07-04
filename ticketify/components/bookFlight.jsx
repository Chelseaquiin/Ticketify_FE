import { useState } from "react"
import { Input } from "./Input"

export const BookFlight = () => {

    const [oneWay, setOneWay] = useState(false)
    const selected = `bg-[#010149] py-2 px-3 rounded cursor-pointer`
    const deselected = `text-[#010149] py-2 px-3 rounded cursor-pointer hover:scale-102 duration-100 ease-in`

    return(
        <section className="min-h-[100vh] py-20 px-5 md:px-40 bg-blue-100 backgroundOne" id="booking">
            <h4 className="text-xl text-[#010149] font-medium mb-4">
                Book your flights
            </h4>
            <div className="w-full min-h-80">
                <div className="flex justify-between items-center text-white text-[14px] font-light w-48 h-12 p-1 bg-white border-b-0 border-gray-100 rounded rounded-b-none shadow-[4px_4px_24px_0_#9C9B9B40]">
                    <button onClick={() => setOneWay(true)} className={`${oneWay ? selected : deselected}`}>
                        One Way
                    </button>
                    <button onClick={() => setOneWay(false)} className={`${oneWay ? deselected : selected}`}>
                        Round Trip
                    </button>
                </div>
                <section className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:justify-center md:items-center bg-white p-4 md:p-15 rounded rounded-t-none rounded-r shadow-[4px_4px_24px_0_#9C9B9B40] opacity-90">
                    <Input />
                    <Input />
                    <Input />
                    {/* <DateInput /> */}
                    {!oneWay && <Input />}
                    <Input />
                    <button className="w-full md:w-[50%] h-[52px] py-[10px] px-[16px] bg-[#010149] rounded text-white">
                        Search
                    </button>
                </section>
            </div>
        </section>
    )
}