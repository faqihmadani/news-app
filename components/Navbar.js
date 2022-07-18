import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between font-sans">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-xl font-bold">BeritaHariIni</span>
                </a>
                <nav className="flex flex-wrap items-center text-base justify-end">
                    <a onClick={() => router.push('/')} className=" hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100">HOME</a>
                    <a onClick={() => router.push('/search')} className="ml-5 hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100">SEARCH</a>
                    <a onClick={() => router.push('/about')} className="ml-5 hover:text-gray-900 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100">ABOUT</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;