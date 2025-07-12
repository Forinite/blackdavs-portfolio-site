'use client'
import Image from "next/image";
import AboutPage from "@/components/Sections/AboutPage";
import ProjectInfo from "@/components/Sections/ProjectInfo";
import Title from "@/components/Sections/Title";
import Profile from "@/components/Sections/Profile";
import Experience from "@/components/Sections/Experience";
import Achievements from "@/components/Sections/Achievements";
import {useEffect} from "react";
import {useGSAP} from "@gsap/react";
// import {SlideInAnimation} from "@/constants/animation";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {SlideInAnimation} from "@/constants/animation";
import SubtleBackground from "@/components/Sections/ui/subtleBg";


const HomePage = ({setHoveredProject, hoveredProject}: {setHoveredProject: Function, hoveredProject: any}) => {
    //
        SlideInAnimation()
    return (
        <section className=" text-white w-fit md:h-full md:overflow-y-visible h-[80vh] overflow-y-scroll">

                <main className=" relative z-10 px-2 flex flex-col items-center justify-center md:max-w-[620px] w-fit mx-auto">
                    <div className="  flex flex-col md:grid md:grid-cols-3 md:grid-rows-12 md:w-full md:h-[550] gap-3">

                        <div className="aboutpage relative opacity-0 relative top-0 -left-[80px] md:col-span-2 row-span-3 px-4 py-2 border default-rounded  smooth-expand" >
                            <AboutPage />
                        </div>
                        <div className="md:hidden">
                            <div className="  profilepage relative z-50 border md:col-span-1  opacity-100 md:row-span-4 h-fit py-5 mb-4  md:py-0 md:h-auto default-bg default-rounded smooth-expand">
                                <Profile />
                            </div>
                            <div className=" md:hidden flex gap-4 mb-2">
                                <div className=" projectpagesmall relative top-[60px] opacity-0.5   w-1/2 h-fit pb-6 md:pb-0 default-rounded border smooth-expand">
                                    <ProjectInfo setHoveredProject={setHoveredProject} hoveredProject={hoveredProject} />
                                </div>
                                <div className=" experiencepagesmall relative -top-[60px] w-1/2 default  opacity-0 border smooth-expand">
                                    <Experience />
                                </div>
                            </div>
                        </div>

                        <div className="  projectpage relative -top-[40px] opacity-0 md:block hidden md:col-span-1 md:row-span-7 h-fit pb-6 md:pb-0 md:h-auto default-rounded default-bg  border smooth-expand">
                            <ProjectInfo setHoveredProject={setHoveredProject} hoveredProject={hoveredProject} />
                        </div>
                        <div className=" titlepage relative -left-[80px] md:col-span-1 -left-[50px]  opacity-0 md:row-span-2 h-fit py-5 md:py-0 md:h-auto flex items-center justify-center bg-blue-600 default-rounded smooth-expand">
                            <Title />
                        </div>
                        <div className="  profilepage scale-105 relative hidden md:block z-50 border md:col-span-1  opacity-100 md:row-span-4 h-fit py-5  md:py-0 md:h-auto default-bg default-rounded smooth-expand">
                            <Profile />
                        </div>
                        <div className=" experiencepage relative top-[100px] md:block  opacity-0 hidden md:col-span-1 md:row-span-7 default-rounded border default-bg hover:bg-transparent smooth-expand">
                            <Experience />
                        </div>
                        <div className=" achievementspage relative left-[80px] md:col-span-2  opacity-0 md:row-span-5 default-bg px-4 py-2 md:mb-0 mb-20 default-rounded smooth-expand">
                            <Achievements />
                        </div>
                    </div>


                </main>
        </section>
    )

}
export default HomePage
