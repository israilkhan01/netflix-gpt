import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full fixed left-0 top-0 z-10 flex items-center justify-between px-8 py-2 mb-[10px]">
            <div className="">
                <Link href="/">
                <Image
                    width={200}
                    height={50}
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo"
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