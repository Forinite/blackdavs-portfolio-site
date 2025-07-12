'use client'
import React, {RefObject, useEffect, useRef, useState} from 'react'
import {ProjectSectionAnimation} from "@/constants/animation";
import {currentpage} from "@/constants/controller";
import InfoBox from "@/components/Header/InfoBox";
import {ComputerIcon, FileStackIcon, HomeIcon} from "lucide-react";
// import {activePage, setActivePage} from "@/constants/controller";

const HeaderPage = ({setActivePage}:{setActivePage:Function}) => {
    const sliderRef = React.useRef<HTMLImageElement>(null);
    const [displayPage, setDisplayPage] = React.useState<string>('Home')

    const handleSlider = (page:string) => {
        if (!sliderRef.current) return;

        if (page === 'Home'){
            sliderRef.current.style.left = "8px"
            sliderRef.current.style.width = "70px"
        }
        else if (page === 'Projects'){
            sliderRef.current.style.left = "96px"
            sliderRef.current.style.width = "76px"

        } else if (page === 'Tech Stack'){
            sliderRef.current.style.left = "198px"
            sliderRef.current.style.width = "80px"
        }

       currentpage.current = page
        page === displayPage? sliderRef.current.style.opacity = '1':sliderRef.current.style.opacity = '0.6'
    }
    const handleDisplayPage = (page:string, setActivePage: Function)=> {
        setDisplayPage(page)
        setActivePage(page)
    }
    const handleMouseLeave = () => {
        handleSlider(displayPage)
    }

    useEffect(()=> {
        handleSlider(displayPage)
    }, [displayPage])

    const icons = [<HomeIcon/>, <ComputerIcon/>, <FileStackIcon/>]
    const pages = ['Home', 'Projects', 'Tech Stack']

    return (
        <header className="h-24 col-flex-center ">
            <div onMouseLeave={() => {handleMouseLeave()}} className={`h-fit py-1 w-fit bg-neutral-800 rounded-md  row-flex-center px-2 gap-4 relative`}>
                <div ref={sliderRef} className="absolute h-[30px] bg-neutral-700 left-2 top-0 w-[70px] md:block hidden z-0 mt-1 rounded-md transition-all duration-300" />

                {pages.map((item, index) => (
                    <div key={item} onClick={() => {handleDisplayPage(item, setActivePage)}} onMouseOver={() => {handleSlider(item)}} className={` ${item == 'Tech Stack'? 'lg:hidden' : ''} cursor-pointer relative z-10 row-flex-center md:flex hidden h-[30px] w-fit px-4  text-sm rounded-md`}>
                        {item}
                    </div>
                ))}
                {icons.map((item, index) => (
                    <div key={index} onClick={() => {handleDisplayPage(pages[index], setActivePage)}} onMouseOver={() => {handleSlider(pages[index])}} className={` ${pages[index] == 'Tech Stack'? 'lg:hidden' : ''} ${pages[index] == displayPage? 'bg-neutral-700': ' ' } md:hidden cursor-pointer relative z-10 row-flex-center h-[30px] w-fit px-4 hover:bg-neutral-700 text-sm rounded-md`}>
                        {item}
                    </div>
                ))}
            </div>

        </header>
    )
}
export default HeaderPage