import LanguageToggle from '../LanguageToggle/LanguageToggle'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown'
import { Link } from "react-router-dom";

import './styles.scss'

const Navbar = () => {
    return (
        <div className='navbar-parent'>
            <div className="navbar">
                <a href={`/`}><h2>SIX<span>ITB</span></h2></a>
                <div className='right-component'>
                    <LanguageToggle></LanguageToggle>
                    <div className="seperator"></div>
                    <ProfileDropdown></ProfileDropdown>
                </div>
            </div>
        </div>
    )
}

export default Navbar