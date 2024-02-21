'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [openNav, setOpenNav] = useState(true)
    function handleNavbar() {

        const nav = document.getElementById('nav')
        const miniNav = document.getElementById('miniNav')
        const content = document.getElementById('content')
        
        console.log([content.childNodes[1]])
        if(openNav) {
            nav.classList.replace('flex', 'hidden')
            miniNav.classList.replace('hidden', 'flex')
            content.classList.replace('ml-65', 'ml-23')
            content.childNodes[1].classList.replace('grid-cols-3', 'grid-cols-4')
        }
        else {
            nav.classList.replace('hidden', 'flex')
            miniNav.classList.replace('flex', 'hidden')
            content.classList.replace('ml-23', 'ml-65')
            content.childNodes[1].classList.replace('grid-cols-4', 'grid-cols-3')
        }
        setOpenNav(!openNav)
    }
    return(
        <div className="w-full h-14 px-4 flex items-center justify-between fixed top-0 z-20 bg-white ">
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
                        className="pl-4 rounded-l-full flex-1 ml-4 border border-gray-400 text-base"
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
                <button className="rounded-r-full border border-gray-400 w-[65px] justify-center inline-flex items-center bg-[#f8f8f8] hover:bg-[#c6c6c6]">
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

                    <div className="hidden flex-wrap w-[180px] h-24 py-2 absolute top-full left-0 rounded-xl shadow shadow-gray-200 group-focus:flex">
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
                <details className="mr-2 relative">
                    <summary className="btn-header list-none">
                        <Image 
                            src='/Header/notification.svg'
                            alt='img '
                            width={24}
                            height={24}
                        />
                    </summary>

                    <div className="inline-flex flex-col w-[480px] max-h-[80dvh] min-h-[20dvh] absolute top-full right-0 rounded-xl shadow shadow-gray-200 bg-white">
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
                                        className=" mr-8 rounded min-w-[100px] object-contain"
                                    />
                                    {/* ---- More ----- */}
                                    <button className="btn-header absolute left-28 group/menu">
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
                                    <button className="btn-header absolute left-28 group/menu">
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
                                    <button className="btn-header absolute left-28 group/menu">
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
                                    <button className="btn-header absolute left-28 group/menu">
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
                                    <button className="btn-header absolute left-28 group/menu">
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
                                    <button className="btn-header absolute left-28 group/menu">
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

                </details>

                {/* --------------- User ---------------- */}
                <button className="px-[6px] w-15 h-[34px] justify-center inline-flex items-center relative cursor-default group">
                    <Image 
                        src='/Header/avt.png'
                        alt='avt'
                        width={32}
                        height={32}
                        className="rounded-full object-contain cursor-pointer"
                    />

                    <div className="w-[300px] h-[90dvh] group-focus:flex hidden flex-col absolute top-0 right-full rounded-xl shadow-sm shadow-gray-200 bg-white overflow-hidden">
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

                        <div className="flex flex-col hover:overflow-auto overflow-hidden">

                            <div className="flex flex-col text-left py-2 border-b-[1px] border-gray-200">
                                <Link href='/' className="px-4 h-10 hover:bg-[#f2f2f2] inline-flex items-center">
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
            </div>
        </div>
    )
}

export default Header
