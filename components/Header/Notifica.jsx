'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const Notifica = () => {
    const [openNotifica, setOpenNotifica] = useState(false)
    const notifyMenu = useRef()
    useEffect(() => {
        let closeNotifyMenu = (e) => {
            if(!notifyMenu.current.contains(e.target))
                setOpenNotifica(false)
        }
        document.addEventListener('mousedown', closeNotifyMenu)
        return () => document.removeEventListener('mousedown', closeNotifyMenu)
    },[openNotifica])
    const handleNotifyMenu = (e) => {
        if(e.target.id == 'notify-img')
        {
            if(openNotifica)
                setOpenNotifica(false)
            else
                setOpenNotifica(true)

        }
    }

    return (
        <button onClick={handleNotifyMenu} className="btn-header mr-2 relative" ref={notifyMenu}>
            <Image 
                id="notify-img"
                src='/Header/notification.svg'
                alt='img '
                width={24}
                height={24}
                className="p-2 w-10 h-10"
            />
            

            <div className={`inline-flex flex-col w-[480px] max-h-[80dvh] min-h-[20dvh] absolute top-full right-0 rounded-xl shadow shadow-gray-200 bg-white overflow-hidden ${!openNotifica && 'hidden' || ''}`}>
                <div className="inline-flex w-full min-h-12 items-center border-b-[1px] border-gray-200">
                    <p className="flex-1 text-left ml-4 text-[16px]">Thông báo</p>
                    <button className="btn-header mr-2">
                        <Image 
                            src='/Common/setting.svg'
                            alt='img '
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
                {/* ----- content notify ------- */}
                <div className="inline-flex flex-col hover:overflow-auto overflow-hidden pb-14">
                    <Link href='/123' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px] object-contain"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>

                    </Link>
                    <Link href='/' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px]"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                                console.log('more')
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>

                    </Link>
                    <Link href='/' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px]"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>

                    </Link>
                    <Link href='/' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px]"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>
                    </Link>
                    <Link href='/' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px]"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>
                    </Link>
                    <Link href='/' className="p-4 pl-0 w-full inline-flex items-start relative hover:bg-[#f6f6f6]">
                        <span className="min-w-4"></span>
                        <Image 
                            src='/Header/avt.png'
                            alt='img '
                            width={48}
                            height={48}
                            className="rounded-full w-12 h-12"
                        />
                        <div className="ml-4 min-w-[230px]">
                            <p className="text-left mb-2">Võ Minh Phú đã tải lên: Clone youtube by NextJs React Tailwind </p>
                            <p className="text-left text-xs opacity-60">3 giờ trước</p>
                        </div>
                        <div className="inline-flex w-full pl-2 relative">
                            <Image 
                                src='/Header/Notification/notification.png'
                                alt='img '
                                width={100}
                                height={60}
                                className=" mr-8 rounded min-w-[100px]"
                            />
                            {/* ---- More ----- */}
                            <button className="btn-header absolute left-28 group/menu" onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <Image 
                                    src='/Header/Notification/menu.svg'
                                    alt='img '
                                    width={24}
                                    height={24}
                                />

                                <div className="hidden group-focus/menu:block absolute top-full right-0 w-96 py-2 bg-white rounded-xl shadow shadow-gray-200 z-10">
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-eye.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Ẩn thông báo này
                                    </p>
                                    <p className="text-left pl-4 pr-3 h-9 inline-flex w-full items-center hover:bg-[#e5e5e5]">
                                        <span className="w-9">
                                            <Image 
                                                src='/Header/Notification/un-notifica.svg'
                                                alt='img '
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        Tắt tất cả thông báo từ Võ Minh Phú
                                    </p>
                                </div>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            

        </button>
    )
}

export default Notifica
