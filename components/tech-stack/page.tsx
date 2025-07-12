'use client'
import { useEffect, useRef, useState } from "react";
import { gradientImgUrl, techStackTechs } from "@/constants";
import Image from "next/image";
import { currentpage, project } from "@/constants/controller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TechItemProps {
    tech: Tech;
    index: number;
    onMouseOver: (index: number) => void;
    projectTechs: ProjectTechs;
}

interface Tech {
    techName: string;
    techImage: string;
}

interface ProjectTechs {
    frontendTechs: string[];
    backendTechs: string[];
    smartContractTechs: string[];
    databaseTechs: string[];
}

const LAYOUT_CONFIG = {
    desktop: {
        columns: 4,
        cellWidth: 125,
        cellHeight: 100,
    },
    mobile: {
        columns: 6,
        cellWidth: 100,
        cellHeight: 100,
    },
};

const TechItem: React.FC<TechItemProps> = ({ tech, index, onMouseOver, projectTechs }) => {
    const getBorderClass = () => {
        const { frontendTechs, backendTechs, smartContractTechs, databaseTechs } = projectTechs;

        if (frontendTechs.includes(tech.techName)) return 'border-orange-600';
        if (backendTechs.includes(tech.techName)) return 'border-purple-600';
        if (smartContractTechs.includes(tech.techName)) return 'border-blue-600';
        if (databaseTechs.includes(tech.techName)) return 'border-green-600';
        return '';
    };

    const borderClass = getBorderClass();

    return (
        <div
            onMouseOver={() => onMouseOver(index)}
            className={`
        md:w-full lg:w-full lg:mx-auto md:h-[100px] h-[70px] aspect-square select-none 
        lg:hover:bg-white/[0.1] flex flex-col items-center justify-center mx-2 md:mx-0
        ${borderClass ? `border ${borderClass} border-dotted` : ''}
      `}
        >
            <div className="tech-icon scale-40 hover:scale-120 overflow-hidden smooth-expand rounded-md">
                <Image
                    className="lg:w-[40px] md:w-[35px] w-[35px] aspect-square transition-all duration-200"
                    src={tech.techImage}
                    alt={tech.techName}
                />
            </div>
            <p className="text-gray-300 md:mt-4 mt-1 select-none md:text-[10px] text-[8px] tracking-widest uppercase font-sans">
                {tech.techName}
            </p>
        </div>
    );
};

const TechStackPage = () => {
    const [currentTechIndex, setCurrentTechIndex] = useState(-1);
    const gradientRef = useRef<HTMLImageElement>(null);

    const updateGradientPosition = (index: number) => {
        if (!gradientRef.current) return;

        const config = window.innerWidth <= 1024 ? LAYOUT_CONFIG.mobile : LAYOUT_CONFIG.desktop;

        if (index === -1) {
            gradientRef.current.style.opacity = '0';
        } else {
            gradientRef.current.style.opacity = '20';
            const x = (index % config.columns) * config.cellWidth;
            const y = Math.floor(index / config.columns) * config.cellHeight;
            gradientRef.current.style.left = `${x}px`;
            gradientRef.current.style.top = `${y}px`;
        }
        setCurrentTechIndex(index);
    };

    useGSAP(() => {
        if (currentpage.current === 'Tech Stack') {
            gsap.to('.tech-icon', {
                delay: 0.5,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'bounce.inOut'
            });
        }
        gsap.to('.tech-icon', {
            delay: 0.2,
            stagger: -0.1,
            scale: 1,
            opacity: 1,
            duration: 0.1,
            ease: 'bounce.inOut'
        });
    }, [currentpage.current]);

    return (
        <section className="lg:w-fit w-[80%]">
            <div className="flex gap-2 justify-between w-full">
                <div className="flex items-center w-full md:w-fit">
                    <p className="md:text-sm text-[10px] mb-4 md:border md:w-fit w-[100%] md:px-10 px-2 py-4 smooth-expand">
                        My Tech Stack.
                    </p>
                    <p className="ml-4 md:text-sm text-[10px] mb-4 md:border font-bold tracking-widest md:w-fit w-[100%] md:px-10 px-2 py-4 smooth-expand">
                        {techStackTechs[currentTechIndex]?.techName || '....'}
                    </p>
                </div>
                <div className="w-fit text-xs">
                    {project?.current.frontendTechs.length > 0 && <p className="text-orange-600">Frontend</p>}
                    {project?.current.backendTechs.length > 0 && <p className="text-purple-600">Backend</p>}
                    {project?.current.smartContractTechs.length > 0 && <p className="text-blue-600">SmartContract</p>}
                    {project?.current.databaseTechs.length > 0 && <p className="text-green-600">Database</p>}
                </div>
            </div>
            <p className="text-xs f">{project.current.title}</p>
            <div
                onMouseLeave={() => updateGradientPosition(-1)}
                className="border lg:w-[500px] md:w-[600px] md:grid lg:grid-cols-4 md:grid-cols-6 flex flex-wrap items-center justify-center relative md:p-0 p-6"
            >
                <div ref={gradientRef} className="absolute transition-all duration-300 pointer-events-none lg:w-[125px] md:w-[100px] md:h-[100px] h-fit overflow-hidden hidden md:block">
                    <Image className="opacity-30" src={gradientImgUrl} alt={'Gradient'} />
                </div>
                {techStackTechs.map((tech, index) => (
                    <TechItem
                        key={index}
                        tech={tech}
                        index={index}
                        onMouseOver={updateGradientPosition}
                        projectTechs={project.current}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechStackPage;
