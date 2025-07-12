
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap"
import {currentpage} from "@/constants/controller";


export const SlideInAnimation = () => {
    useGSAP(()=>{
        gsap.to(".aboutpage", {delay:0 ,opacity: 1, left: '0px', top: 0, duration: 0.1, ease: 'elastic.out'})
        gsap.to(".projectpage", {delay:0.2 ,opacity: 1, left: '0px', top: '0px', duration: 0.1, ease: 'elastic.out'})
        gsap.to(".profilepage",{delay:2 ,scale: 1, duration: 0})
        gsap.to(".achievementspage",{delay:0.3 ,opacity: 1, left: '0px', top: 0, duration: 0.1, ease: 'elastic.out'})
        gsap.to(".experiencepage", {delay:0.4 ,opacity: 1, left: '0px', top: 0, duration: 0.2, ease: 'elastic.out'})
        gsap.to(".titlepage", {delay:1.5 ,opacity: 2, left: '0px', top: 0, duration: 0.4, ease: 'elastic.out'})
        gsap.to(".experiencepagesmall", {delay:0.4 ,opacity: 1, left: '0px', top: 0, duration: 0.2, ease: 'elastic.out'})
        gsap.to(".projectpagesmall", {delay:0.2 ,opacity: 1, left: '0px', top: '0px', duration: 0.1, ease: 'elastic.out'})
    }, [])
}
export const ProjectSectionAnimation = () => {
    useGSAP(()=>{
        if (currentpage.current === 'Projects') {
            gsap.to('.project-image', {delay:0.5 ,opacity: 1, duration:0.5})
            gsap.to('.project-info', {delay:0.5 ,top: '0px', opacity: 1, scale: 1 , duration:0.5, ease:'none'})
            gsap.to('.project-link', {delay:0.5 ,left: '0px', scale: 1 , duration:1, ease:'none'})
        }
        console.log("currentPageCheck", currentpage.current)
    }, [currentpage.current])
}

