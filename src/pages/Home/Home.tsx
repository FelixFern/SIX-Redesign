import AplikasiLayanan from './AplikasiLayanan/AplikasiLayanan'
import './styles.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='hero-parent'>
                <div className="hero-content">
                    <h2>Selamat Datang,</h2>
                    <h2 className='name'>Felix Fernando</h2>
                </div>
            </div>
            <div className='main-content'>
                <AplikasiLayanan></AplikasiLayanan>
            </div>
        </div>
    )
}

export default Home