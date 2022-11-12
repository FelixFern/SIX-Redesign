import LanguageToggle from '../LanguageToggle/LanguageToggle'
import './styles.scss'

const Navbar = () => {
    return (
        <div className='navbar-parent'>
            <div className="navbar">
                <h2>SIX<span>ITB</span></h2>
                <div className='right-component'>
                    <LanguageToggle></LanguageToggle>
                    <div className="seperator"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar