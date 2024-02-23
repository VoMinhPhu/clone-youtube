'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const User = () => {
    const [openUser, setOpenUser] = useState(false)
    const userMenu = useRef()
    useEffect(() => {
        let closeUserMenu = (e) => {
            if(!userMenu.current.contains(e.target))
                setOpenUser(false)
        }
        document.addEventListener('mousedown', closeUserMenu)
        return () => document.removeEventListener('mousedown', closeUserMenu)
    },[openUser])
    const handleNotifyMenu = (e) => {
        if(e.target.tagName == 'IMG' || e.target.tagName == 'BUTTON')
        {
            if(openUser)
                setOpenUser(false)
            else
                setOpenUser(true)
        }
    }
    return (
        
        <button onClick={handleNotifyMenu} className="px-[6px] w-15 h-[34px] justify-center inline-flex items-center relative cursor-default group" ref={userMenu}>
            <Image 
                src='/Header/avt.png'
                alt='avt'
                width={32}
                height={32}
                className="rounded-full object-contain cursor-pointer"
            />

            <div className={`w-[300px] h-[90dvh] inline-flex flex-col absolute top-0 right-full rounded-xl shadow-sm shadow-gray-200 bg-white overflow-hidden ${ !openUser && 'hidden' || ''}`}>
                <div className="flex p-4 border-b-[1px] border-gray-200">
                    <Image 
                        src='/Header/avt.png'
                        alt='img '
                        width={40}
                        height={40}
                        className="rounded-full mr-4 w-10 h-10"
                    />
                    <div className="text-left">
                        <p className="text-base">Phú Võ</p>
                        <p className="text-base mb-2">@phuvo9895</p>
                        <Link href="/" className="text-sky-600">Xem kênh của bạn</Link>
                    </div>
                </div>

                <div className="flex flex-col hover:overflow-y-scroll overflow-hidden">

                    <div className="flex flex-col text-left py-2 border-b-[1px] border-gray-200">
                        <Link href='https://myaccount.google.com/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/google-icon.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Tài khoản Google
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/mul-account.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <p className="flex-1 min-w-48">
                                Chuyển đổi tài khoản
                            </p>
                            <Image 
                                src='/Common/arrow-right.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-3 right-7"
                            />
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/logout.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Đăng xuất
                        </Link>
                    </div>

                    <div className="flex flex-col text-left py-2 border-b-[1px] border-gray-200">
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/youtube-studio.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Youtube Studio
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/monney-icon.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Giao dịch mua và gói thành viên
                        </Link>
                    </div>

                    <div className="flex flex-col text-left py-2 border-b-[1px] border-gray-200">
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/shield-user.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Dữ liệu của bạn trong Youtube
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/dark-mode.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <p className="flex-1 min-w-48">
                                Giao diện: Giao diện thiết bị
                            </p>
                            <Image 
                                src='/Common/arrow-right.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-3"
                            />
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/langue.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <p className="flex-1 min-w-48">
                                Ngôn ngữ: Tiếng Việt
                            </p>
                            <Image 
                                src='/Common/arrow-right.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-3"
                            />
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/limit-mode.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <p className="flex-1 min-w-48">
                                Chế độ hạn chế: Đã tắt
                            </p>
                            <Image 
                                src='/Common/arrow-right.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-3"
                            />
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/country.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <p className="flex-1 min-w-48">
                                Địa điểm: Việt Nam
                            </p>
                            <Image 
                                src='/Common/arrow-right.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-3"
                            />
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Header/User/shortcut.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Phím tắt
                        </Link>
                    </div>

                    <div className="flex flex-col text-left py-2 border-b-[1px] border-gray-200">
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Common/setting.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Cài đặt
                        </Link>
                    </div>

                    <div className="flex flex-col text-left py-2">
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Common/help-icon.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Trợ giúp
                        </Link>
                        <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
                            <Image 
                                src='/Common/suggest.svg'
                                alt='img '
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            Gửi ý kiến phản hồi
                        </Link>
                    </div>
                </div>

            </div>

        </button>
    )
}

export default User
