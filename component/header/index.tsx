import Link from "next/link";
import { useState } from "react";
import HeaderLogo from "./logo";

const MainHeader = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    return (<header>
        <div className="container">
            <div className="logo-container">
                <Link href="/">
                    <a className="nav-link"><HeaderLogo /></a>
                </Link>
            </div>
            <nav>
                <button onClick={toggleNavbar} className={`nav-btn${isNavOpen ? " open" : ""}`} aria-label="Open Navigation">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`nav-aside${isNavOpen ? " open" : ""}`}>
                    <ul className="navbar">
                        <li onClick={toggleNavbar}>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li onClick={toggleNavbar}>
                            <Link href="/">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li onClick={toggleNavbar}>
                            <Link href="/">
                                <a className="nav-link">Products</a>
                            </Link>
                        </li>
                        <li onClick={toggleNavbar}>
                            <Link href="/blogs">
                                <a className="nav-link">Blogs</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>);

    function toggleNavbar(e) {
        setNavOpen(!isNavOpen);
    }
}

export default MainHeader;