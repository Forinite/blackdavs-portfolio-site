'use client'
import Image from "next/image";
import HomePage from "@/components/home-page/page";
import TechStackPage from "@/components/tech-stack/page";
import HeaderPage from "@/components/Header/HeaderPage";
import {useEffect, useRef, useState} from "react";
import {project} from "@/constants/controller";
import ProjectSectionPage from "@/components/projects/ProjectSectionPage";

export default function Home() {
    const [activePage, setActivePage] = useState('Home')
    const [hoveredProject, setHoveredProject] = useState<any>([]);
    const [techScale, setTechScale] = useState(100);
   // useEffect(()=>{
    //     console.log('save')
    //     if (hoveredProject.current.frontendTechs){
    //         project.current = hoveredProject
    //     }
    //
    //
    // }, [hoveredProject])

    // scale = window.innerWidth

  return (
    <section className="bg-black w-screen overflow-x-hidden ">
        <div className="relative z-10">
            <HeaderPage setActivePage={setActivePage} />
        </div>

        <main className="w-full h-fit overflow-hidden relative z-20 ">
            <section className={` flex  w-full  transition-all duration-500 ${activePage=== 'Home'?' -translate-x-0 ' : activePage=='Projects'? '-translate-x-[100%]' :'-translate-x-[200%]'} `}>

                <section className="min-w-screen">
                    <div className="w-full flex flex-row items-center justify-center px-6 ">
                        <div className="w-fit mx-auto">
                            <HomePage setHoveredProject={setHoveredProject} hoveredProject={hoveredProject}/>
                        </div>
                        <div className={`lg:block hidden w-fit lg:mx-auto`}>
                            <TechStackPage  />
                        </div>

                    </div>
                </section>
                <section className="min-w-screen ">
                    <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center ">
                      <ProjectSectionPage />
                    </div>
                </section>
                <section className="min-w-screen ">
                    <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center  ">
                        <TechStackPage />
                    </div>
                </section>
            </section>


        </main>

    </section>
  );
}
