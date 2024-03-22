import Link from "next/link"
import Image from "next/image"
import LogoImg from "../../public/Netflix_Logo_PMS.png"

const Header = () => {
    return (
        <div className="w-full fixed left-0 top-0 z-10 flex items-center justify-between px-8 py-2 mb-[10px]">
            <div className="">
                <Link href="/">
                    <Image
                        src={LogoImg}
                        width={200}
                        height={50}
                        alt="logo"
                        priority={true}
                    />
                </Link>
            </div>
            <div className="text-yellow-500 text-lg font-bold flex align-middle">
                <Link href="/login" >
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Header