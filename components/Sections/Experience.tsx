import React from 'react'
import {experienceList} from "@/constants";

const Experience = () => {
    return (
        <div className="py-2 px-4 w-full h-full">
            {experienceList.map((item, index) => (
                <div key={index} className="mt-4">
                    <h5 className="text-xs tracking-widest font-semibold font-serif uppercase w-fit ml-1 my-2">{item.skill}</h5>
                    <div className="flex  items-center gap-4 transition-all duration-300 md:hover:gap-8 my-1">
                        <h4 className="md:text-4xl text-xl font-bold font-mono">{item.Exps}+</h4>
                        <div className="md:text-sm text-xs font-semibold overflow-hidden">
                            <p>{item.timeFrame}</p>
                            <p>Experience</p>
                        </div>
                    </div>
                    <hr className="my-4 border-gray-600"/>
                </div>
            ))}


        </div>
    )
}
export default Experience
