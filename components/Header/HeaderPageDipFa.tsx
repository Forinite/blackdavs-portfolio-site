'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { currentpage } from "@/constants/controller"

const PAGES = ['Home', 'Projects', 'Tech Stack'] as const
type PageType = typeof PAGES[number]

interface SliderConfig {
    left: string
    width: string
    path: string
}

// Add path mapping to the configuration
const SLIDER_CONFIGS: Record<PageType, SliderConfig> = {
    'Home': { left: '8px', width: '70px', path: '/' },
    'Projects': { left: '96px', width: '76px', path: '/projects' },
    'Tech Stack': { left: '198px', width: '80px', path: '/tech-stack' }
}

// Reverse mapping for path to page name
const PATH_TO_PAGE: Record<string, PageType> = {
    '/': 'Home',
    '/projects': 'Projects',
    '/tech-stack': 'Tech Stack'
}

interface HeaderPageProps {
    setActivePage: (page: PageType) => void
}

const useSliderNavigation = (initialPage: PageType) => {
    const router = useRouter()
    const pathname = usePathname()
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const [displayPage, setDisplayPage] = React.useState<PageType>(initialPage)

    const updateSlider = (page: PageType) => {
        if (!sliderRef.current) return

        const config = SLIDER_CONFIGS[page]
        const slider = sliderRef.current.style

        slider.left = config.left
        slider.width = config.width
        slider.opacity = page === displayPage ? '1' : '0.6'

        currentpage.current = page
    }

    // Update display page based on URL changes
    useEffect(() => {
        const currentPage = PATH_TO_PAGE[pathname] || 'Home'
        setDisplayPage(currentPage)
        updateSlider(currentPage)
    }, [pathname])

    const navigateToPage = (page: PageType) => {
        const { path } = SLIDER_CONFIGS[page]
        router.push(path)
    }

    return {
        sliderRef,
        displayPage,
        setDisplayPage,
        updateSlider,
        navigateToPage
    }
}

const NavItem = ({
                     page,
                     isActive,
                     onClick,
                     onHover
                 }: {
    page: PageType
    isActive: boolean
    onClick: () => void
    onHover: () => void
}) => (
    <div
        key={page}
        onClick={onClick}
        onMouseOver={onHover}
        className={`
      ${page === 'Tech Stack' ? 'lg:hidden' : ''} 
      cursor-pointer 
      relative 
      z-10 
      row-flex-center 
      h-[30px] 
      w-fit 
      px-4 
      text-sm 
      rounded-md
      ${isActive ? 'font-medium' : ''}
    `}
    >
        {page}
    </div>
)

const HeaderPage: React.FC<HeaderPageProps> = ({ setActivePage }) => {
    const {
        sliderRef,
        displayPage,
        updateSlider,
        navigateToPage
    } = useSliderNavigation('Home')

    const handlePageChange = (page: PageType) => {
        setActivePage(page)
        navigateToPage(page)
    }

    const handleMouseLeave = () => {
        updateSlider(displayPage)
    }

    return (
        <header className="h-24 col-flex-center">
            <nav
                onMouseLeave={handleMouseLeave}
                className="h-fit py-1 w-fit bg-neutral-800 rounded-md row-flex-center px-2 gap-4 relative"
            >
                <div
                    ref={sliderRef}
                    className="absolute h-[30px] bg-neutral-700 left-2 top-0 w-[70px] z-0 mt-1 rounded-md transition-all duration-300"
                />

                {PAGES.map((page) => (
                    <NavItem
                        key={page}
                        page={page}
                        isActive={page === displayPage}
                        onClick={() => handlePageChange(page)}
                        onHover={() => updateSlider(page)}
                    />
                ))}
            </nav>
        </header>
    )
}

export default HeaderPage


