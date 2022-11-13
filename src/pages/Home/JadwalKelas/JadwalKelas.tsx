import { useContext } from 'react'
import { tandaiHadirModalContext } from '../../../global/global-states'
import './styles.scss'

const JadwalBox = ({data, index, parentIndex} : any) => {
    const {isOpen, setModal} = useContext(tandaiHadirModalContext)
    return (
        <div className={index === 0 && parentIndex === 0 ? 'jadwalBox-parent' : 'jadwalBox-parent muted'}>
            <div className="detail">
                <h4 className='kodeMK'>{data.kode}</h4>
                <p className='namaMK'>{data.namaMK}</p>
                <p className='waktu'>{data.waktu}</p>
            </div>
            <div className='tandaiHadir-btn' onClick={
                () => {
                    setModal(!isOpen)
                }
            }>  
                <h4>Tandai Hadir</h4>
            </div>
        </div>
    )
}

const JadwalKelas = ({jadwal} : any) => {
    return (
        <div className='jadwalKelas-parent'>
            {jadwal.map((data: any, parentIndex: BigInteger) => {
                return (
                    <div className='jadwalKelas'>
                        <h4 className='jadwalKelas-title'>{data.tanggal === '12 Januari 2022' ? `Hari ini`: `Besok`}</h4>
                        <p>{data.tanggal}</p>
                        {data.matkul.map((dataMK : any, index : BigInteger) => {
                            console.log(parentIndex)
                            return (
                                <JadwalBox key={index} data={dataMK} index={index} parentIndex={parentIndex}></JadwalBox>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default JadwalKelas