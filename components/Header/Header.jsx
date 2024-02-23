'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Notifica from "./Notifica"
import User from "./User"

const Header = () => {
    const [openNav, setOpenNav] = useState(true)
    function handleNavbar() {

        const nav = document.getElementById('nav')
        const miniNav = document.getElementById('miniNav')
        const content = document.getElementById('content')
        
        if(openNav) {
            nav.classList.replace('flex', 'hidden')
            miniNav.classList.replace('hidden', 'flex')
            content.classList.replace('ml-65', 'ml-23')
            content.childNodes[1].classList.replace('grid-cols-3', 'grid-cols-4')
        } else {
            nav.classList.replace('hidden', 'flex')
            miniNav.classList.replace('flex', 'hidden')
            content.classList.replace('ml-23', 'ml-65')
            content.childNodes[1].classList.replace('grid-cols-4', 'grid-cols-3')
        }
        setOpenNav(!openNav)
    }


    return(
        <section className="w-full h-14 px-4 flex items-center justify-between fixed top-0 z-20 bg-white ">
            {/* ----------------- Nav and logo ---------------- */}
            <div className="inline-flex items-center">
                <button onClick={handleNavbar} className="btn-header">
                    <Image
                        src='/Header/menu.svg'
                        alt='img '
                        width={24}
                        height={24}
                    />
                </button>
                {/* ------- Logo ------- */}
                <Link href='/' className="py-[18px] px-4">
                    <Image 
                        src='/Header/youtube.svg'
                        alt='img '
                        width={90}
                        height={20}
                    />
                </Link>
            </div>

            {/* ----------- Search ----------- */}
            <div className="inline-flex w-[45%]">
                <div className="inline-flex h-10 relative flex-1">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm "
                        className="pl-4 rounded-l-full flex-1 ml-4 border border-gray-300 text-base outline-1 outline-blue-400 shadow-inner"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-[50%]">
                        <Image
                            src='/Header/keyboard.svg'
                            alt='img '
                            width={20}
                            height={12}
                            className="opacity-50 w-6 h-4"
                        />
                    </span>
                </div>
                <button className="rounded-r-full border border-gray-300 w-[65px] justify-center inline-flex items-center bg-[#f8f8f8] hover:bg-[#c6c6c6]">
                    <Image 
                        src='/Header/search.svg'
                        alt='img '
                        width={24}
                        height={24}
                    /> 
                </button>
                <button className="btn-header bg-[#e5e5e5] hover:bg-[#c6c6c6] ml-4">
                    <Image 
                        src='/Header/mic.svg'
                        alt='img '
                        width={22}
                        height={15}
                        className="w-6 h-6"
                    /> 
                </button>
            </div>

            <div className="inline-flex items-center">
                {/* --------- Upload video or Live stream --------- */}
                <button className="btn-header mr-2 relative group">
                    <Image 
                        src='/Header/camera.svg'
                        alt='img '
                        width={24}
                        height={24}
                    />

                    <div className="hidden flex-wrap w-[180px] h-24 py-2 absolute top-full left-0 rounded-xl shadow-sm shadow-slate-400 group-focus:flex bg-white">
                        <Link href='/' className="w-full inline-flex items-center hover:bg-[#f2f2f2] pl-4 pr-8">
                            <span>
                                <Image
                                    src='/Header/videoicon.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                    className="object-contain mr-4"
                                />
                            </span>
                            Tải lên video
                        </Link>
                        <Link href='/' className="w-full inline-flex items-center hover:bg-[#f2f2f2] pl-4 pr-8">
                        <span>
                                <Image
                                    src='/Header/liveicon.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                    className="object-contain mr-4"
                                />
                            </span>
                            Phát trực tiếp
                        </Link>
                    </div>

                </button>

                {/* --------------- Notification -------------- */}
                <Notifica/>

                {/* --------------- User ---------------- */}
                <User/>
            </div>
        </section>
    )
}

export default Header
