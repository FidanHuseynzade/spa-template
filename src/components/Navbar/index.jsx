import { useRef } from "react";
import "./index.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>Kayelux</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Gallery</a>
                <a href="/#">Services</a>
                <a href="/#">Pricing</a>
                <a href="/#">Blog</a>
                <a href="/#">Contact</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <CloseOutlined />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <MenuOutlined />
            </button>
        </header>
    );
}

export default Navbar;
