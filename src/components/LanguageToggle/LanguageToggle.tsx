import { useContext } from 'react'
import { languageContext } from '../../global/global-states'
import './styles.scss'

const LanguageToggle = () => {
    const {language, setLanguage} = useContext(languageContext)   
    return (
        <div className='toggle-parent' onClick={() => {
            language === 'id' ? setLanguage('en') : setLanguage('id') 
        }}>
            <div className='text'>
                <p className={language === 'id' ? 'enabled' :''}>ID</p>
                <p className={language === 'id' ? '' :'enabled'}>EN</p>
            </div>
            <div className={language === 'id' ? 'toggle enabled-id' :'toggle enabled-en'}></div>
        </div>

    )
}

export default LanguageToggle