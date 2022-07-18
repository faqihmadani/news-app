const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="text-xl font-medium">BeritaHariIni</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 — Made with 💗 by
                    <a href="https://github.com/faqihmadani" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@faqihmadani</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;