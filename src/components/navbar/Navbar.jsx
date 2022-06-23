import React from 'react'
import './navbar.css'
import nikeLogo from '../../assets/nikeLogo.png'
import {CgProfile} from 'react-icons/cg';
import {FiSearch} from 'react-icons/fi';
import {FiShoppingBag} from 'react-icons/fi';
import {FiMenu} from 'react-icons/fi';
import {RiCloseFill} from 'react-icons/ri';
import { useState } from 'react';

function Navbar() {

    const [menuOpen, setMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className="navbar_category">
            <p><a href='../'>WOMEN</a></p>
            <p><a href='../'>MEN</a></p>
            <p><a href='../'>ALL</a></p>
        </div>

        <div className="navbar_nikeLogo">
            <h3>SNEAKER</h3>
            <img src={nikeLogo} alt='nike offficial logo' />
        </div>

        <div className="navbar_phoneMenu">
            {!menuOpen?<FiMenu className='icons'/>:<RiCloseFill className='icons'/>}
        </div>

        <div className="navbar_links">
            <CgProfile className='icons' />
            <FiSearch className='icons' />
            <FiShoppingBag className='icons' />
        </div>
    </div>
  )
}

export default Navbar