import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="#residencies">Residencies</a>
                    <a href="#value">Our Value</a>
                    <a href="#contact-us">Contact Us</a>
                    <a href="#get-started">Get Started</a>
                    <button className="button">
                        <a href="mailto:afifoomar2009@gmail.com">Contact</a>
                    </button>
                </div>

                {/* To Make Nav Outside Click */}
                {/* <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false) }}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#residencies">Residencies</a>
                        <a href="#value">Our Value</a>
                        <a href="#contact-us">Contact Us</a>
                        <a href="#get-started">Get Started</a>
                        <button className="button">
                            <a href="mailto:afifoomar2009@gmail.com">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler> */}
                {/* for medium and small screens */}
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};

export default Header;
