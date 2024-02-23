import Link from "next/link"
import Image from "next/image"


const Content = () => {
    return (
        <section id='content' className="w-full h-full overflow-auto ml-65 mt-14 relative">
            {/* ---------- Filter ---------- */}
            <div className="flex px-1 bg-white w-full fixed top-14">
                <p className="btn-content current-change">Tất cả</p>
                <p className="btn-content ">Danh sách kết hợp</p>
                <p className="btn-content ">Âm nhạc</p>
                <p className="btn-content ">Tin tức</p>
                <p className="btn-content ">Mới tải lên gần đây</p>
                <p className="btn-content ">Đã xem</p>
                <p className="btn-content ">Đề xuất mới</p>
            </div>

            {/* ------------ Contents ------------ */}
            <div className="grid grid-cols-3 gap-4 pt-6 mr-4 mt-14 ml-1">
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <Image 
                        priority
                        src={'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg'}
                        width={400}
                        height={200}
                        className="w-full rounded-xl"
                        alt='Learn Next React Tailwind '
                    />
                    <div className="flex">
                        <Image
                            src='/Header/avt.png'
                            alt="auth avt"
                            width={36}
                            height={36}
                            className="rounded-full w-9 h-9 mt-3 mr-3"
                        />
                        <div className="pr-6 flex-1">
                            <p className="text-base font-medium mt-3 mb-1">Learn Next React Tailwind Learn Next React Tailwind Learn Next React Tailwind  </p>
                            <Link href='/' className="text-[#8b8b8b]">Võ Minh Phú </Link>
                            <p className="text-[#8b8b8b]">
                                0 lượt xem
                                <span className="ml-4">1 ngày trước</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default Content
