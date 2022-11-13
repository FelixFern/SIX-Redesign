import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineFile, AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineUnorderedList, AiOutlineInsertRowAbove, AiOutlineBranches, AiOutlineSetting } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { SlGraduation } from 'react-icons/sl'

import './styles.scss'

type aplikasiButtonProps = {
    icons: React.ReactNode,
    title: string, 
    link: string,
}

const AplikasiButton = ({icons, title, link}: aplikasiButtonProps) => {
    return (
        <div className='aplikasi-btn-parent'>
            <a href={link}>
                <div className="icon-container">
                    <i>{icons}</i>
                </div>
            </a>
            <h4>{title}</h4>
        </div>
    )
}


const AplikasiLayanan = () => {
    return (
        <div className="aplikasiLayanan-parent">
            <h4 className='section-title'>Aplikasi dan Layanan</h4>
            <div className="aplikasi-list">
                <AplikasiButton icons={<AiOutlineFile />} title='Kurikulum' link='/app/kurikulum'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUser />} title='Status Mahasiswa' link='/app/status-mahasiswa'></AplikasiButton>
                <AplikasiButton icons={<FaRegMoneyBillAlt />} title='Keuangan & Beasiswa' link='/app/keuangan-dan-beasiswa'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUsergroupAdd />} title='Kelas' link='kelas'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUnorderedList />} title='Evaluasi Perkuliahan & Portofolio' link='/app/evaluasi-perkuliahan'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineBranches />} title='Penjurusan TPB' link='/app/penjurusan-tpb'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineInsertRowAbove />} title='Rencana Studi & Perwalian' link='/app/rencana-studi'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUnorderedList />} title='Wisuda' link='/app/wisuda'></AplikasiButton>
                <AplikasiButton icons={<SlGraduation />} title='Control Panel' link='/app/control-panel'></AplikasiButton>
            </div>
        </div>
    )
}

export default AplikasiLayanan