import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter()
    console.log(router.asPath);
    const [color, setColor] = useState(false)

    const handleChangeColor = () => {
        if (window.scrollY >= 70) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    //window.addEventListener('scroll', handleChangeColor)

    return (
        <header className={`text-gray-600 body-font mb-10 flex justify-center fixed w-full z-50 ${color ? 'bg-blue-200' : 'bg-white'} transition ease-in-out duration-300`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  justify-between font-sans ">
                <a onClick={() => router.push('/')} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
                    <span className="text-xl font-bold">📰 today news</span>
                </a>
                <nav className="flex flex-wrap items-center text-base justify-end">
                    <a onClick={() => router.push('/')} className={`hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath === '/' ? 'underline' : ''}`}>HOME</a>
                    <a onClick={() => router.push('/feeds/1')} className={`ml-5 hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath.includes('/feeds/1') ? 'underline' : ''}`}>FEEDS</a>
                    <a onClick={() => router.push('/about')} className={`ml-5 hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath === '/about' ? 'underline' : ''}`}>ABOUT</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;