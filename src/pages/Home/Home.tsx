import { useEffect } from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import { berita } from '../../data/beritaData'
import { filePenunjang } from '../../data/filePenunjangData'
import { jadwal } from '../../data/jadwalkelasData'
import { jadwalPentingData } from '../../data/jadwalPentingData'

import AplikasiLayanan from './AplikasiLayanan/AplikasiLayanan'
import Berita from './Berita/Berita'
import FilePenunjang from './FilePenunjang/FilePenunjang'
import JadwalKelas from './JadwalKelas/JadwalKelas'
import JadwalPenting from './JadwalPenting/JadwalPenting'
import './styles.scss'

const Home = () => {
    useEffect(() => {
        document.title = "SIX | Sistem Informasi Akademik ITB"
    }, [])
    
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
                <div className="row">
                    <div className="row-left">
                        <Berita berita={berita}></Berita>
                    </div>
                    <div className="row-right">
                        <JadwalPenting jadwalPenting={jadwalPentingData}></JadwalPenting>
                        <FilePenunjang filePenunjang={filePenunjang}></FilePenunjang>
                    </div>
                </div>
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