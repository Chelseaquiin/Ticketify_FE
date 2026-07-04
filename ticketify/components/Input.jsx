"use client"

import { useState } from "react"

export const Input = ({ placeholder, name, type }) => {

    const [dep, setDep] = useState("")
    return(
        <div className="w-full mb-[0px] relative">
            {/* <label htmlFor={label} className="text-xl font-medium ">{label}</label> */}
            <select
                
                // className={`w-full h-[52px] py-[10px] px-[16px] bg-[#F3F3F5] placeholder-[#ACADAF] ${error ? "border-[1.5px] border-[#E63B2E]" : "focus:border-[#2A7EAF]"}
                //      mt-[10px] rounded-[7px] focus:border  outline-none`}
                // {...register(name)}
                className={`w-full md:w-[100%] h-[52px] py-[10px] px-[16px] bg-white rounded outline-none appearance-none border border-gray-300`}
                value={dep} onChange={(e) => setDep(e.target.value)}
            >
                <option value="from">From</option>
                <option value="Calabar">CBQ</option>
                <option value="Abuja">ABU</option>
                <option value="Port Harcourt">PHC</option>
                <option value="Uyo">QUO</option>
            </select>
            {/* <span className="flex justify-start text-sm text-[#E63B2E] absolute">
                {error && `Required*`}
            </span> */}
        </div>
    )
}