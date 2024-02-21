import Link from "next/link"
import Image from "next/image"
import Footer from "./Footer"

const Nav = () => {
    
    return (
        <>
            <div id='nav' className="flex flex-col h-full overflow-hidden hover:overflow-y-scroll flex-1 w-60 fixed inset-0 z-10 pt-14">
                <div className="inline-flex flex-col p-3 border-b border-gray-200">
                    <div className="inline-flex flex-col">
                        <Link href='/' className="tag-nav current-page">
                            <Image 
                                src='/Nav/home.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Trang chủ
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/shorst.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Shorts
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/subcribed.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Kênh đăng ký
                        </Link>
                    </div>

                    <div className="inline-flex flex-col mt-3 pt-3 border-t border-gray-200">
                        <Link href='/' className="tag-nav text-base font-medium">
                            Bạn
                            <Image 
                                src='/Nav/arrow-right.svg'
                                alt='img'
                                width={16}
                                height={16}
                                className="ml-2"
                            />
                        </Link>

                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/my-chanel.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Kênh của bạn
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/video-seen.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Video đã xem
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/my-video.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Video của bạn
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/will-seen.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Xem sau
                        </Link>
                        <Link href='/' className="tag-nav">
                            <Image 
                                src='/Nav/like.svg'
                                alt='img'
                                width={24}
                                height={24}
                                className="mr-6"
                            />
                            Video đã thích
                        </Link>
                    </div>
                </div>

                <div className="inline-flex flex-col p-3">
                    <h3 className="text-base font-medium px-3 pt-[6px] pb-1">Kênh đăng ký</h3>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Header/avt.png'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6 rounded-full"
                        />
                        <p className="truncate">Võ Minh Phú</p>
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Header/avt.png'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6 rounded-full"
                        />
                        <p className="truncate">Võ Minh Phú Offical</p>
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Header/avt.png'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6 rounded-full"
                        />
                        <p className="truncate">Learn react tailwind css</p>
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/other-channel.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6 rounded-full"
                        />
                        <p className="truncate">Xem qua các kênh</p>
                    </Link>
                </div>

                <div className="inline-flex flex-col p-3 border-t border-gray-200">
                    <h3 className="text-base font-medium px-3 pt-[6px] pb-1">Khám phá</h3>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/trend.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Thịnh hành
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/music.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Âm nhạc
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/game.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Trò chơi
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/news.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Tin tức
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/sports.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Thể thao
                    </Link>
                </div>

                <div className="inline-flex flex-col p-3 border-t border-gray-200">
                    <h3 className="text-base font-medium px-3 pt-[6px] pb-1 min-w-52">Dịch vụ khác của Youtube</h3>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/yt-premium.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        YouTube Premium
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/yt-studio.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        YouTube Studio
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/yt-music.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        YouTube Music
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/yt-kids.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        YouTube Kids
                    </Link>
                </div>

                <div className="inline-flex flex-col p-3 border-t border-gray-200">
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Common/setting.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Cài đặt
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Nav/reported.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Nhật ký báo cáo
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Common/help-icon.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Trợ giúp
                    </Link>
                    <Link href='/' className="tag-nav">
                        <Image 
                            src='/Common/suggest.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mr-6"
                        />
                        Gửi ý kiến phản hồi
                    </Link>
                </div>

                <Footer/>

            </div>
            <div id='miniNav' className="hidden h-full w-[72px] fixed inset-0 z-10 pt-14">
                <div className="px-1 mt-1">
                    <Link href='/' className="bg-white pt-4 pb-[14px] flex flex-col w-16 h-[74px] text-[10px] rounded-lg hover:bg-[#f2f2f2]">
                        <Image 
                            src='/Nav/home.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className=" mx-auto"
                        />
                        <p className="text-center mt-[3px]">Trang chủ</p>
                    </Link>
                    <Link href='/' className="bg-white pt-4 pb-[14px] flex flex-col w-16 h-[74px] text-[10px] rounded-lg hover:bg-[#f2f2f2]">
                        <Image 
                            src='/Nav/shorst.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                        <p className="text-center mt-[3px]">Shorts</p>
                    </Link>
                    <Link href='/' className="bg-white pt-4 pb-[14px] flex flex-col w-16 h-[74px] text-[10px] rounded-lg hover:bg-[#f2f2f2]">
                        <Image 
                            src='/Nav/subcribed.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                        <p className="text-center mt-[3px]">Kênh đăng ký</p>
                    </Link>
                    <Link href='/' className="bg-white pt-4 pb-[14px] flex flex-col w-16 h-[74px] text-[10px] rounded-lg hover:bg-[#f2f2f2]">
                        <Image 
                            src='/Nav/you.svg'
                            alt='img'
                            width={24}
                            height={24}
                            className="mx-auto"
                        />
                        <p className="text-center mt-[3px]">Bạn</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav
