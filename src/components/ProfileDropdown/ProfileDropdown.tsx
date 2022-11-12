import './styles.scss'
import { FaUser } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

const ProfileDropdown = () => {
    return (
        <div className='profileDropdown-parent'>
            <i><FaUser></FaUser></i>
            <div className='details'>
                <h4>Felix Fernando</h4>
                <p>10120082</p>
            </div>
            <i className='dropdown-icon'><MdArrowDropDown></MdArrowDropDown></i>
        </div>
    )
}

export default ProfileDropdown