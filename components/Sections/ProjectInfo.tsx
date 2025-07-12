'use client'
import React, {useEffect, useRef} from 'react'
import {achievementList, projectList} from "@/constants";
import {defaultProject, project} from "@/constants/controller";
import {InfoIcon} from "lucide-react";

const ProjectInfo = ({setHoveredProject, hoveredProject}: {setHoveredProject: Function, hoveredProject: any}) => {
    const infoContRef = useRef<any>(null);

    const handleOnHover = () =>{
        if (!infoContRef) return
        infoContRef.current.style.display = `block`
        infoContRef.current.style.opacity = `1`
    }
    const handleOnMouseLeave = () =>{
        infoContRef.current.style.opacity = `0`
    }

    return (
       <div>
           <div onMouseOver={handleOnHover} onMouseLeave={handleOnMouseLeave}  className="absolute top-2 right-2 lg:block hidden">
               <InfoIcon className="w-5 text-gray-400  hover:w-6 transition-all duration-300 cursor-pointer" />
           </div>
           <div ref={infoContRef}  className="absolute -right-40 hidden opacity-0 transition-all duration-300 top-0 bg-black w-40 text-xs col-flex-center p-2 shadow shadow-white rounded-lg">
               Click a Project and hover over Tech Stack to reveal technologies used
           </div>
           <p className="mt-6 text-[10px] font-semibold uppercase w-fit mx-auto">Recent</p>
           <div onClick={()=> {
               project.current = defaultProject.current
           }} className=" mb-4 mt-2 rounded-sm flex items-center gap-2 border-2 border-gray-950 w-fit px-4 py-1 mx-auto bg-neutral-800 hover:bg-neutral-700">
               <p className="md:text-xs text-xs font-semibold uppercase">Projects</p>
               <div className="border  h-4 aspect-square text-[10px] col-flex-center rounded-xs">{projectList.length}</div>
           </div>
           <ul>
               {projectList.map((item, index) => (
                   <li key={index} onClick={()=> {
                       project.current = item
                   }} className={` h-fit  w-full flex items-center ${index > 4? 'hidden' : '' }`}>
                       <div className={`h-full w-0.5 bg-white ${index == 0? "rounded-tr-sm" : "" } ${index == 4? "rounded-br-sm" : "" } col-flex-center `}>

                       </div>
                       <div className="ml-4 h-fit py-2 w-[80%]">

                           <div className="flex items-center">
                               <div className="relative md:block hidden ">
                                   <div className="bg-white w-1 shadow-white shadow aspect-square rounded-full" />
                                   <div className="w-4 aspect-square backdrop-blur-4xl  absolute -top-1 -left-1 bg-black/[100] opacity-0 hover:opacity-50" />
                               </div>

                                <p className=" cursor-pointer md:ml-4 hover:ml-8 transition-all duration-300  md:text-xs text-[10px] font-semibold">{item.title}</p>
                           </div>

                       </div>

                   </li>
               ))}
           </ul>
       </div>

    )
}
export default ProjectInfo
