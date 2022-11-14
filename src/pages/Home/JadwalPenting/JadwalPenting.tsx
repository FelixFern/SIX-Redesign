import './styles.scss'

type jadwalPentingProps = {
    jadwalPenting: Array<any>
}

const JadwalPenting = ({jadwalPenting}:jadwalPentingProps) => {
    return (
        <div className='jadwalPenting-parent'>
            <div className="section-title">
                <h4 className='title'>Jadwal Penting</h4>
                <h4 className='title-sub'>Mulai (WIB)</h4>
                <h4 className='title-sub'>Akhir (WIB)</h4>
            </div>
            <div className='jadwal-list'>
                {jadwalPenting.map((data) => {
                    return (
                        <div className="jadwal">
                            <div className='judul'>
                                <h4>{data.title}</h4>
                                <p>{data.subtitle}</p>
                            </div>
                            <div className='waktu'>
                                <h4>{data.startDate}</h4>
                                <p>{data.startTime}</p>
                            </div>
                            <div className='waktu'>
                                <h4>{data.endDate}</h4>
                                <p>{data.endTime}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JadwalPenting