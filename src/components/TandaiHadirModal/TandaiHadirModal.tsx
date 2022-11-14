import { useContext } from 'react'
import { tandaiHadirModalContext } from '../../global/global-states'
import './styles.scss'

const TandaiHadirModal = () => {
    const {isOpen, setModal} = useContext(tandaiHadirModalContext)
    
    return (
        <div className={isOpen ? 'tandaiHadirModal-parent' : 'tandaiHadirModal-parent hide'}>
            <div className={isOpen ? "black-bg" : "black-bg hide"} onClick={() => {setModal(!isOpen)}}></div>
            <div className={isOpen ? 'modal-parent' : 'modal-parent hide'}>
                <h3><span>MA3131</span><br></br>Pengantar Analisis Real</h3>
                <h4>Kuliah - Tatap Muka</h4>
                <p>Selasa / 12 November 2022</p>
                <h4>Dosen</h4>
                <p>Dr. John doe, Ph. D</p>
                <h4>Link</h4>
                <p>Selasa / 12 November 2022</p>
                <h4>Topik</h4>
                <p>Selasa / 12 November 2022</p>
                <h4>Catatan</h4>
                <p>Selasa / 12 November 2022</p>
                <div className="button-parent">
                    <div className="button tandai-hadir">
                        <h4>Tandai Hadir</h4>
                    </div>
                    <div className="button close" onClick={() => {setModal(!isOpen)}}>
                        <h4>Tutup</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TandaiHadirModal