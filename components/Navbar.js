import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter()
    const [color, setColor] = useState(false)
    const [open, setOpen] = useState(false)
    const [keyword, setKeyword] = useState('')

    const handleSearch = (e) => {
        if (keyword) {
            console.log(keyword);
            const str = keyword.replace(/\s+/g, '+').toLowerCase();
            router.push(`/search/${str}`)
        }
        setKeyword('')
        e.preventDefault()
    }

    const handleChangeColor = () => {
        if (window.scrollY >= 70) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    //window.addEventListener('scroll', handleChangeColor)


    return (
        <header className={`text-gray-600 body-font mb-10 flex justify-center fixed w-full z-50 shadow-lg ${color ? 'bg-gray-600' : 'bg-white'} transition ease-in-out duration-300`}>
            <div className="container mx-auto flex flex-col flex-wrap p-5 md:flex-row items-center justify-between font-sans ">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <a onClick={() => router.push('/')} className=" title-font font-medium items-center justify-center  hover:cursor-pointer">
                        <div className={`text-xl font-bold transition ease-in-out duration-300 ${color ? 'text-white' : 'text-gray-900'} `}>📰 today news</div>
                    </a>
                    <button onClick={() => setOpen(!open)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <nav className={`items-center text-base justify-end md:flex flex-col md:flex-row space-y-4 md:space-y-0 ${open ? 'flex' : 'hidden'}  ${color ? 'text-white' : 'text-gray-900'}`}>
                    <a onClick={() => router.push('/')} className={`mt-5 md:mt-0 hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath === '/' ? 'underline' : ''}`}>HOME</a>
                    <a onClick={() => router.push('/feeds/1')} className={`md:ml-5  hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath.includes('/feeds/1') ? 'underline' : ''}`}>FEEDS</a>
                    <a onClick={() => router.push('/about')} className={`md:ml-5  hover:cursor-pointer hover:transform hover:-translate-y-[2px] transition-all duration-100 ease-in-out ${router.asPath === '/about' ? 'underline' : ''}`}>ABOUT</a>
                    <form className=" md:ml-5 flex items-center" onSubmit={(e) => handleSearch(e)}>
                        <input onChange={(e) => { setKeyword(e.target.value) }} type="text" placeholder="Search News" className="border-gray-300 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <button type="submit" className="ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;