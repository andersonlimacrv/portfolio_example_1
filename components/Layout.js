//fonts
import { Inter } from "next/font/google"

//fonts settings
const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
})

//components
import Nav from '../components/Nav'
import Header from '../components/Header'
//import TopLeftImg from '../components/TopLeftImg'
const Layout = ({ children }) => {
    return (
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${inter.variable} font-inter relative`}>
            {/* {<TopLeftImg />} */}
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;