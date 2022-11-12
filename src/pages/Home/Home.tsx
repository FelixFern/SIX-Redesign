import {AiFillCalendar} from 'react-icons/ai'

import AplikasiLayanan from './AplikasiLayanan/AplikasiLayanan'
import JadwalKelas from './JadwalKelas/JadwalKelas'
import './styles.scss'

const jadwal = [
    {
        'tanggal': '12 Januari 2022', 
        'matkul': [
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
        ]
    }, 
    {
        'tanggal': '13 Januari 2022', 
        'matkul': [
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
            {
                'kode': 'MA3131',
                'namaMK': 'Pengantar Analisis Real', 
                'waktu': '13.00-15.00'
            }, 
        ]
    }
]


const Home = () => {
    return (
        <div className='home'>
            <div className='hero-parent'>
                <div className="hero-content">
                    <h2>Selamat Datang,</h2>
                    <h2 className='name'>Felix Fernando</h2>
                </div>
            </div>
            <div className='main-content-left'>
                <AplikasiLayanan></AplikasiLayanan>
            </div>
            <div className="main-content-right">
                <div className="content">
                    <div className="title"><i><AiFillCalendar></AiFillCalendar></i><h4>Jadwal Kelas</h4></div>
                    <JadwalKelas jadwal={jadwal}></JadwalKelas>
                    
                </div>
            </div>
        </div>
    )
}

export default Home