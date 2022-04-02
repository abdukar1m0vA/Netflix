import { ArrowDropDown, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./navbar.scss"
import { Notifications } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <span className='kid'>KID</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar