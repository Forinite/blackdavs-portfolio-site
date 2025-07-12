import React from 'react'
import Image from "next/image";
import {profilePicUrl, projectList} from "@/constants";

const LargeAbsoluteImage = () => {
    return (
        <div className=" absolute z-40 w-screen -top-20 left-0 h-screen row-flex-center">
            <div  className="  absolute top-0 left-0 w-screen h-screen bg-neutral-900 opacity-[0.8]" />
            <div className="relative z-20 w-[60%] border-8">
                <Image className="w-full" src={projectList[2].image} alt={'LargeImage'} />
            </div>
        </div>
    )
}
export default LargeAbsoluteImage
