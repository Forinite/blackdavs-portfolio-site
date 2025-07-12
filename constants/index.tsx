import profilePic from '../Assets/profilePic.png'

// Contact Images
import XIcon from '../Assets/X.png'
import GMailIcon from '../Assets/gmail.png'
import WhatSappIcon from '../Assets/R6.png'
import FacebookIcon from '../Assets/facebook.png'
import LinkedinIcon from '../Assets/linkedin.png'
import GithubIcon from '../Assets/github.png'

// Technologies Images
import htmlIcon from '../Assets/html.png'
import cssIcon from '../Assets/css.png'
import javascriptIcon from '../Assets/javascript.png'
import typescriptIcon from '../Assets/typescript.png'
import reactIcon from '../Assets/react.png'
import nextIcon from '../Assets/next.png'
import mystenIcon from '../Assets/Mysten.png'
import dappIcon from '../Assets/dapp.png'
import wagmiIcon from '../Assets/wagmi.png'
import viemIcon from '../Assets/Viem.png'
import rainbowkitIcon from '../Assets/rainbowkit.png'
import etherjsIcon from '../Assets/ethers.png'
import tailwindIcon from '../Assets/tailwind.png'
import bootstrapIcon from '../Assets/bootstrap.png'
import nodeIcon from '../Assets/node.png'
import postmanIcon from '../Assets/postman.png'
import mongodbIcon from '../Assets/mongoDB.png'
import moveIcon from '../Assets/move.png'

// Project Images
import TechCityBrigde from '../Assets/techcity.jpg'
import EMTA from '../Assets/EMTA.jpg'
import Mamashay from '../Assets/mamashay.jpg'
import SecureExportGlobal from '../Assets/SecureExportGlobal.jpg'

// Gradient
import gradientImg from '../Assets/gradient.png'

//Bg Image
import BgImage from '../Assets/BgImage.png'

// Exports
export const gradientImgUrl = gradientImg
export const profilePicUrl = profilePic
export const BgImageUrl = BgImage

export const contactList = [
    {contact : 'Email', link : 'mailto:daviddavidaniefiok@gmail.com ' , image : GMailIcon},
    {contact : 'Facebook', link: 'https://www.facebook.com/daviddavid.aniefiok.96 ', image: FacebookIcon},
    {contact : 'WhatSapp', link : 'https://wa.me/<+2348077116265>' , image : WhatSappIcon},
    {contact : 'X', link: ': https://x.com/blacdav', image: XIcon},
    {contact : 'Github', link : 'https://github.com/blacdav', image : GithubIcon},
    {contact : 'LinkedIn', link: 'https://www.linkedin.com/blacdav', image: LinkedinIcon},]

export const achievementList= [
    {title: '1st Place – Borderless Hackathon', desc: 'My Team came first during the borderless Hackathon '},
    {title: '3rd Place – Lisk x Borderless Hackathon', desc: 'We came third in the higher-level Lisk x Borderless Hackathon'},
]

export const experienceList = [
    {skill: "Backend", Exps: "3", timeFrame: "Years" },
    {skill: "Frontend", Exps: "1", timeFrame: "Year" },
    {skill: "BlockChain", Exps: "8", timeFrame: "Months"}
]



const frontendTechs = [
    {techName: 'HTML5', techImage: htmlIcon},
    {techName: 'CSS', techImage: cssIcon},
    {techName: 'JavaScript', techImage: javascriptIcon},
    {techName: 'TypeScript', techImage: typescriptIcon},
    {techName: 'React.Js', techImage: reactIcon},
    {techName: 'Next.Js', techImage: nextIcon},
    {techName: 'Mysten', techImage: mystenIcon},
    {techName: 'Dapp', techImage: dappIcon},
    {techName: 'Wagmi', techImage: wagmiIcon},
    {techName: 'Viem', techImage: viemIcon},
    {techName: 'Rainbowkit', techImage: rainbowkitIcon},
    {techName: 'Ether.Js', techImage: etherjsIcon},
    {techName: 'Tailwind', techImage: tailwindIcon},
    {techName: 'BootStrap', techImage: bootstrapIcon},
]
const backendTechs = [
    {techName: 'Node.Js', techImage: nodeIcon},
    // {techName: 'Next.Js', techImage: nextIcon},
    {techName: 'Postman', techImage: postmanIcon},
]
const databaseTechs = [
    {techName: 'MongoDB', techImage: mongodbIcon},
]

const smartContractsTechs = [
    {techName: 'Move', techImage: moveIcon},
]

 export const techStackTechs = [
    ...frontendTechs,
    ...backendTechs,
    ...databaseTechs,
    ...smartContractsTechs
]

export const projectList = [
    {
        title: 'Mamashay',
        type: '',
        role: 'Frontend Developer',
        info: " Built on Lisk Blockchain",
        desc: 'Mamashay is an easy to use Food-Selling Service Application, focused at bringing tasty meals to your front door in record time',
        frontendTechs: ['HTML5','CSS','JavaScript','Next.Js', 'Tailwind', 'Wagmi', 'Viem', 'Rainbowkit'],
        backendTechs: ['Node.Js'],
        smartContractTechs: [],
        databaseTechs: [],
        link: 'https://mamashay-demo.vercel.app',
        image: Mamashay,

    },
    {
        title: 'EMTA Website',
        type: 'Client: Consultancy firm',
        role: 'Fullstack Developer',
        desc: 'EMTA is a consultancy service with a Fully Functional website to maximize user experience',
        frontendTechs: ['HTML5','CSS','JavaScript','Next.Js','Tailwind'],
        backendTechs: [],
        smartContractTechs: [],
        databaseTechs: ['MongoDB'],
        link: 'https://emta.vercel.app',
        image: EMTA,
    },
    {
        title: 'Tech Bridge City Website',
        type: 'Client: Tech company',
        role: 'Fullstack Developer',
        desc: 'A Complete and Fully Responsive Website Built for Tech Bridge City',
        frontendTechs: ['HTML5','CSS','JavaScript','Next.Js','Tailwind'],
        backendTechs: [],
        smartContractTechs: [],
        databaseTechs: ['MongoDB'],
        link: 'https://techbridgecity.vercel.app',
        image: TechCityBrigde,
    },
    {
        title: 'Service Export Global',
        type: 'Client: Delivery service (similar to GIG)',
        role: 'Backend Developer',
        desc: 'A service integrating, Tracking ID generation, Item tracking and delivery updates, Admin tools for managing deliveries ans Backend authentication',
        features: ['Tracking ID generation', 'Item tracking and delivery updates', 'Admin tools for managing deliveries', 'Backend authentication'],
        frontendTechs: ['HTML5','CSS','JavaScript','TypeScript',],
        backendTechs: ['Node.Js'],
        smartContractTechs: [],
        databaseTechs: ['MongoDB'],
        link: 'https://secureexportglobal.com',
        image: SecureExportGlobal,
    },
    {
        title: 'Talent Mint (NFT Platform on Sui)',
        type: 'A Hackathon project',
        role: 'Smart Contract Developer',
        desc: "A Build-a-thon project built using SUI MOVE and used for NFT minting ",
        // info: "Built using Sui Move",
        // use: "NFT minting for a Build-a-thon",
        frontendTechs: [],
        backendTechs: [],
        smartContractTechs: ['Move'],
        databaseTechs: [],
        link: '#',
        image: BgImage,
    },
]