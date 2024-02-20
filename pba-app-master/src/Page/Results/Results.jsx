import "./results.css";
import React, { useState } from 'react';
import {FaAngleLeft} from 'react-icons/fa6'
import { Link } from "react-router-dom";

export default function Result({ endPageTimeout }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isAddedMenuOpen, setAddedMenuOpen] = useState(false);

    const closeMenus = () => {
        setAddedMenuOpen(false);
        setIsOpenMenu(true)
        setAnimIsOpen(false)
        if (animIsOpen) {
            setMainClass("Results-Box rAnim__R")
            setBtnClass("Result-title rAnim__R")
            setFooterClass("More-Avatars rAnim__R")
            setBtnclass1("goMore rAnim__R")
        }
        setTimeout(() => {
            setMenuOpen(false);
        }, 500)
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setIsOpenMenu(false)
        setAnimIsOpen(true)
        setMainClass("Results-Box rAnim")
        setBtnClass("Result-title rAnim")
        setFooterClass("More-Avatars rAnim")
        setBtnclass1("goMore rAnim")
    };


    const toggleAddedMenu = () => {
        setAddedMenuOpen(!isAddedMenuOpen);
    };

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const [btnStatus, setBtnStatus] = useState(false)
    function handleClick() {
        setBtnStatus(prevStatus => {
            // Toggle the previous status
            return !prevStatus;
        });

        setTimeout(() => {
            setBtnStatus(false);
        }, 500);
    }
    const [animIsOpen, setAnimIsOpen] = useState(false)
    const [mainlass, setMainClass] = useState("Results-Box")
    const [btnClass, setBtnClass] = useState("Result-title")
    const [footerClass, setFooterClass] = useState("More-Avatars")
    const [btnclass1 , setBtnclass1] = useState('goMore')

    return (
        <div className={`Result-Box ${isMenuOpen || isAddedMenuOpen ? 'Menu-Open' : ''}`}>
            <div className="Result">
                <Link style={{textDecoration: "none"}} to={'/image'}><button className={btnclass1}><FaAngleLeft />Create more</button></Link>
                <div className={btnClass}>
                    <p>Here's the result!</p>
                </div>
                <div className={mainlass}>
                    <div className="Results-Card">
                        <div className="Card-image">
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                </div>
                <button className="Save-button" onClick={toggleMenu}>
                    Share on Facebook
                </button>
                {isMenuOpen && (
                    <div className={"Menu"} style={{ transform: isOpenMenu ? `translateY(999px)` : `translateY(0px)` }}>
                        <button className="Close-button" onClick={closeMenus}>
                            ╳
                        </button>
                        <div className="Added-Box">
                            <div className="Added">
                                <p className="Added-p-one">Added!</p>
                                <p className="Added-p-two">Don't forget to share them with your friends</p>
                            </div>
                            <div className="More-Avatars-Box">
                                <div className="More-Avatars">
                                    <div className="More-Avatars-Text">
                                        <p>Want more avatars?</p>
                                        <h4>Free as always.</h4>
                                    </div>
                                    <button className="More-Avatars-Two" onClick={toggleAddedMenu}>
                                        More avatars!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isAddedMenuOpen && (
                    <div className="Menu2">
                        <button className="Close-button" onClick={closeMenus}>
                            ╳
                        </button>
                        <div className="Share-Box">
                            <div className="Share-text">
                                <p className="Share-p-one">Share the magic</p>
                                <p className="Share-p-two">Invite a friend to get more AI avatars for free.</p>
                            </div>
                            <div className="ShareBtns">
                                <button onClick={handleClick} className={btnStatus ? "blurBtn" : ""}>Copy Link</button>
                                <button onClick={endPageTimeout}>Check Status</button>
                            </div>
                            <div className="ShareFooter">
                                <p>Once they create their avatars, you will eren more free tries</p>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="More-Avatars-Box">
                    <div className={footerClass}>
                        <div className="More-Avatars-Text">
                            <p>Want more avatars?</p>
                            <h4>Free as always.</h4>
                        </div>
                        <button className="More-Avatars-Two" onClick={toggleAddedMenu}>
                            More avatars!
                        </button>
                        {isAddedMenuOpen && (
                            <div className='Menu' style={{ transform: isOpenMenu ? `translateY(999px)` : `translateY(0px)` }}>
                                <button className="Close-button" onClick={closeMenus}>
                                    ╳
                                </button>
                                <div className="Share-Box">
                                    <div className="Share-text">
                                        <p className="Share-p-one">Share the magic</p>
                                        <p className="Share-p-two">Invite a friend to get more AI avatars for free.</p>
                                    </div>
                                    <div className="ShareBtns">
                                        <button onClick={handleClick} className={btnStatus ? "blurBtn" : ""}>Copy Link</button>
                                        <button onClick={endPageTimeout}>Check Status</button>
                                    </div>
                                    <div className="ShareFooter">
                                        <p>Once they create their avatars, you will eren more free tries</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    )
}