import React from 'react'
import { AiOutlineFile, AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineUnorderedList, AiOutlineInsertRowAbove, AiOutlineBranches, AiOutlineSetting } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { SlGraduation } from 'react-icons/sl'

import './styles.scss'

type aplikasiButtonProps = {
    icons: React.ReactNode,
    title: string
}

const AplikasiButton = ({icons, title}: aplikasiButtonProps) => {
    return (
        <div className='aplikasi-btn-parent'>
            <div className="icon-container">
                <i>{icons}</i>
            </div>
            <h4>{title}</h4>
        </div>
    )
}


const AplikasiLayanan = () => {
    return (
        <div className="aplikasiLayanan-parent">
            <h4 className='section-title'>Aplikasi dan Layanan</h4>
            <div className="aplikasi-list">
                <AplikasiButton icons={<AiOutlineFile />} title='Kurikulum'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUser />} title='Status Mahasiswa'></AplikasiButton>
                <AplikasiButton icons={<FaRegMoneyBillAlt />} title='Keuangan & Beasiswa'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUsergroupAdd />} title='Kelas'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUnorderedList />} title='Evaluasi Perkuliahan & Portofolio'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineBranches />} title='Penjurusan TPB'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineInsertRowAbove />} title='Rencana Studi & Perwalian'></AplikasiButton>
                <AplikasiButton icons={<AiOutlineUnorderedList />} title='Wisuda'></AplikasiButton>
                <AplikasiButton icons={<SlGraduation />} title='Control Panel'></AplikasiButton>
            </div>
        </div>
    )
}

export default AplikasiLayanan