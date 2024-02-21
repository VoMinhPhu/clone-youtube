import Link from "next/link"

const Footer = () => {
    return (
        <div className="text-[13px] border-t border-gray-200">
            <div className="pt-4 px-6 min-w-60">
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Giới thiệu</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Báo chí</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Bản quyền</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Liên hệ với chúng tôi</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Người sáng tạo</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Quảng cáo</Link>
                <Link href='/' className="inline-block font-bold opacity-80">Nhà phát triển</Link>
            </div>

            <div className="pt-3 px-6">
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Điều khoản</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Quyền riêng tư</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Chinh sách và an toàn</Link>
                <Link href='/' className="mr-2 inline-block font-bold opacity-80">Cách Youtube hoạt động</Link>
                <Link href='/' className="inline-block font-bold opacity-80">Thử các tính năng mới</Link>
            </div>

            <div className="py-4 px-6 text-xs">© 2024 Google LLC</div>
        </div>
    )
}

export default Footer
