import React from 'react'
import {achievementList} from "@/constants";

const Achievements = () => {
    return (
        <div className="h-full">
            <h3 className="text-lg font-semibold">
                Achievements
            </h3>
            <div className="flex  flex-col items-center justify-center w-full h-[80%] ">
                {achievementList.map((item, index) => (
                    <div key={index} className=" h-fit  w-full flex items-center">
                        <div className={`h-full w-0.5 bg-white ${index == 0? "rounded-tr-sm" : "" } ${index == achievementList.length -1? "rounded-br-sm" : "" } col-flex-center `}>

                        </div>
                        <div className="ml-4 h-fit py-2 w-[80%] border-l ">

                            <div className="flex items-center">
                                <div className="bg-white w-3 aspect-square rounded-full col-flex-center relative -left-6">
                                    <div className="default-bg w-2 aspect-square rounded-full"></div>
                                </div>
                                <h4 className="text-sm font-semibold">{item.title}</h4>
                            </div>

                            <p className="text-xs ml-8 text-gray-400">{item.desc}</p>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )
}
export default Achievements
