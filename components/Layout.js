import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;