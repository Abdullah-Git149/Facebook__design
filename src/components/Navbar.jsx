import React from 'react';
import { FaBell, FaCaretDown, FaFacebook, FaFacebookMessenger, FaFontAwesomeFlag, FaGamepad, FaHome, FaPlus, FaUser, FaVideo } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__first">

                <div className="first__logo">
                    <FaFacebook className="first__logo__icon" />
                </div>
                <div className="first__searchbar">
                    <input type="text"
                        className="first__search"
                        placeholder="Search Faceebook" />
                </div>
            </div>
            <div className="navbar__second">

                <span className="second__icons">
                    <FaHome className="second__icon" />
                </span>
                <span className="second__icons">
                    <FaFontAwesomeFlag className="second__icon" />
                </span>
                <span className="second__icons">
                    <FaVideo className="second__icon" />
                </span>
                <span className="second__icons">
                    <FaUser className="second__icon" />
                </span>
                <span className="second__icons">
                    <FaGamepad className="second__icon" />
                </span>



            </div>
            <div className="navbar__last">
                <span className="last__icons">
                    <FaPlus className="last__icon"/>
                </span>
                <span className="last__icons">
                    <FaFacebookMessenger className="last__icon"/>
                </span>
                <span className="last__icons">
                    <FaBell className="last__icon"/>
                </span>
                <span className="last__icons">
                    <FaCaretDown className="last__icon"/>
                </span>
            </div>

        </div>
    );
};

export default Navbar;