'use client'

import React, {useEffect} from 'react'
import Image from "next/image";
import {BgImageUrl, profilePicUrl, projectList} from "@/constants";
import {Link2Icon} from "lucide-react";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {ProjectSectionAnimation} from "@/constants/animation";
import {currentpage} from "@/constants/controller";
import * as url from "node:url";

const ProjectSectionPage = () => {
    const [activeSection, setActiveSection] = React.useState(1)
    const handleSetActiveSection = (int: number) => {
        setActiveSection(int)
    }

    // useEffect(()=> {
    //     console.log("currentPage", currentpage.current)
    //
    // }, [currentpage.current])

    ProjectSectionAnimation()

    useGSAP(()=>{
        console.log(activeSection)
        switch (activeSection){
            case 1:
                gsap.to('.project-cont-top', { delay: 0.5,  top: '0px', duration: 0.3, stagger: 0.2, ease:'bounce.inOut'})
                gsap.to('.project-cont-bottom', { delay: 0.5,  top: '0px', duration: 0.3, stagger: -0.2, ease:'bounce.inOut'})
                gsap.fromTo('.translation-cont', { duration: 0.5, translateX:'2%'}, {delay: 0.5, translateX: '0%', duration: 0.8})

                break
            case 2:
                gsap.fromTo('.project-cont-top', {top: '40px', duration: 0.5, stagger: 0.2, ease:'bounce.inOut'}, { delay: 0.3,  top: '-600px', duration: 0.4, stagger: 0.2, ease:'bounce.inOut' })
                gsap.fromTo('.project-cont-bottom', {top: '-40px', duration: 0.5, stagger: 0.2, ease:'bounce.inOut'}, { delay: 0.3,  top: '600px', duration: 0.4, stagger: -0.2, ease:'bounce.inOut' })

                gsap.to('.translation-cont', {delay: 0.9, translateX: '-100%', duration: 0.8})
            default:
                break
        }
    }, [activeSection])

    let TechClassName = " bg-neutral-700 py-0.5 px-2 rounded-md "
    return (
        <section className=" h-[85vh] overflow-y-scroll overflow-x-hidden w-screen flex flex-col items-center  ">
            <main className={` translation-cont w-screen flex lg:flex-row flex-col items-center transition-all duration-600 ease-in-out {activeSection == 1? 'translae-x-[0%]' :'-translte-x-[100%]'}  `}>
                <div className="min-w-screen max-w-screen col-flex-center lg:row-flex-center w-screen overflow-hidden">
                    <div className={`px-6 w-full flex flex-col items-center md:grid grid-rows-2 md:grid-cols-2 grid-col-1 gap-x-12 gap-y-6  mx-auto justify-center `}>
                        {projectList.map((item, index)=> (
                            <div key={item.title} className={` ${index <= 1 ? 'project-cont-top ' : 'project-cont-bottom'} transition-all duration-600 relative top-0 flex lg:flex-row flex-col gap-2 items-center justify-center w-[80%] mx-auto  lg:w-full ${index > 3? 'hidden': ''}  `} >

                                    <div className={`lg:w-1/2  md:w-[300px]  w-full aspect-6/5 md:h-[240px] lg:h-[260px] hover:scale-90 relative smooth-expand  rounded-md default-bg overflow-hidden cursor-pointer col-flex-center`}>
                                        <Image className="w-full h-full absolute -z-10 left-0 top-0" src={BgImageUrl} alt={'Bg-Image'} />
                                        <div  className="project-image  relative z-10 w-[600px] hover:w-[140%] opacity-0 transition-all duration-400">
                                            <Image width={1000} height={1000}  src={item.image} alt={'Profile'} />
                                        </div>
                                    </div>

                                <div className={`col-flex-center lg:w-1/2  overflow-hidden md:w-[300px] w-full h-fit  md:h-[240px] lg:h-[260px] gap-y-4  md:justify-between `}>

                                    <div className=" project-info  opacity-70 scale-90  w-full md:h-[174px] relative -top-40  lg:h-[194px] h-fit flex flex-col justify-between rounded-md default-bg px-4 py-2 hover:scale-[102%] transition-all duration-500 cursor-pointer overflow-hidden ">
                                        <div>
                                            <h2 className="text-lg font-bold">{item.title}</h2>
                                            <p className="lg:text-xs text-[10px] text-gray-400 my-2">{item.desc}</p>
                                            <div className="text-[10px] uppercase my-2">Role: {item.role}r</div>
                                        </div>
                                        <div>
                                            <ul className="  md:text-[6px] text-[8px] lg:text-[8px] flex items-center flex-wrap gap-2">
                                                {

                                                    item.frontendTechs.map((item, index)=> (
                                                        (!['HTML5','CSS' ].includes(item) && <li key={index} className={TechClassName}>{item}</li>)
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.backendTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.smartContractTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.databaseTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}

                                            </ul>
                                        </div>
                                    </div>
                                    <Link className=" project-link w-full h-[54px]  relative -left-[90%]" href={item.link} >
                                        <div className="w-full h-[54px] rounded-md default-bg row-flex-center cursor-pointer hover:scale-[96%] transition-all duration-300">
                                            <div><Link2Icon className="-rotate-45 w-7 h-7 hover:-rotate-60 transition-all duration-300"/></div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                <div className="min-w-screen col-flex-center lg:row-flex-center w-screen h-fit  overflow-hidden lg:mt-0 mt-6">
                    <div className="  px-8 md:w-full w-full flex flex-col items-center md:grid  md:grid-cols-2 grid-col-1 gap-x-12 gap-y-6 h-fit mb-40 ">
                        {projectList.map((item, index)=> (
                            <div key={item.title} className={` flex lg:flex-row flex-col gap-2 items-center justify-center w-[80%] mx-auto  lg:w-full ${index <= 3? 'hidden': ''}  `} >

                                <div className={`lg:w-1/2  md:w-[300px]  relative  w-full aspect-6/5 md:h-[240px] lg:h-[260px] hover:scale-90 smooth-expand  rounded-md default-bg overflow-hidden cursor-pointer col-flex-center`}>
                                    <Image className="w-full h-full absolute -z-10 left-0 top-0" src={BgImageUrl} alt={'Bg-Image'} />
                                    <div className="project-image w-[600px] hover:w-[140%] opacity-0 transition-all duration-400">
                                        <Image width={1000} height={1000}  src={item.image} alt={'Profile'} />
                                    </div>
                                </div>

                                <div className={`col-flex-center lg:w-1/2  overflow-hidden md:w-[300px] w-full h-fit  md:h-[240px] lg:h-[260px] gap-y-4  md:justify-between `}>

                                    <div className=" project-info  opacity-70 scale-90  w-full md:h-[174px] relative -top-40  lg:h-[194px] h-fit flex flex-col justify-between rounded-md default-bg px-4 py-2 hover:scale-[102%] transition-all duration-500 cursor-pointer overflow-hidden ">
                                        <div>
                                            <h2 className="text-lg font-bold">{item.title}</h2>
                                            <p className="lg:text-xs text-[10px] text-gray-400 my-2">{item.desc}</p>
                                            <div className="text-[10px] uppercase my-2">Role: {item.role}r</div>
                                        </div>
                                        <div>
                                            <ul className="  md:text-[6px] text-[8px] lg:text-[8px] flex items-center flex-wrap gap-2">
                                                {

                                                    item.frontendTechs.map((item, index)=> (
                                                        (!['HTML5','CSS' ].includes(item) && <li key={index} className={TechClassName}>{item}</li>)
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.backendTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.smartContractTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}
                                                {
                                                    // const tech = [];
                                                    item.databaseTechs.map((item, index)=> (
                                                        <li key={index} className={TechClassName}>{item}</li>
                                                    ))}

                                            </ul>
                                        </div>
                                    </div>
                                    <Link className=" project-link w-full h-[54px]  relative -left-[90%]" href={item.link} >
                                        <div className="w-full h-[54px] rounded-md default-bg row-flex-center cursor-pointer hover:scale-[96%] transition-all duration-300">
                                            <div><Link2Icon className="-rotate-45 w-7 h-7 hover:-rotate-60 transition-all duration-300"/></div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </main>

            <ul className="row-flex-center mt-6 space-x-4 lg:flex hidden ">
                {[1,2].map((item, index)=> (
                    <li onClick={()=> handleSetActiveSection(item)} className={`border-2 border-white  ${item == activeSection? '': 'opacity-[0.5]' }  hover:opacity-[1] cursor-pointer h-12 w-12 row-flex-center rounded-full smooth-expand`}>{item}</li>
                ))}
            </ul>


        </section>
    )
}
export default ProjectSectionPage
