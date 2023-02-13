import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo.png'
import {FiChevronDown } from "react-icons/fi";

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    return (
        <div name='top' className='navbar'>
            <div className="container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} width="120px" height="40px" alt="Resilient Recovery Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Program <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li className='submenu-header'> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/substance-abuse`}> SUBSTANCE ABUSE </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/substance-abuse-php`}> Partial Hospitalization Program</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/substance-abuse-iop`}> Intensive Outpatient Program </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/substance-abuse-op`}> Outpatient Program </NavLink> </li>
                            <br/>
                            <li className='submenu-header'> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mental-health`}> MENTAL HEALTH </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mental-health-php`}> Partial Hospitalization Program</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-iop`}> Intensive Outpatient Program </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-op`}> Outpatient Program </NavLink> </li>
                            <br/>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Jobs`}> Jobs Program </NavLink> </li>

                        </ul>
                    </li>


                    <li><Link to='/treatment'>Treatment</Link> </li>
                    <li><Link to='/mission'>Our Mission</Link> </li>
                    <li><Link to='/about-us'>About Us</Link> </li>
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar

