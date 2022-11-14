import './styles.scss'

type beritaPropsType = {
    berita: Array<any>
}

const Berita = ({berita} : beritaPropsType) => {
    return (
        <div className='berita-parent'>
            <h4 className='section-title'>Berita</h4>
            <div className="berita-list">
                {berita.map((data) => {
                    return (
                        <div className="berita">
                            <h3>{data.title}</h3>
                            <h4>{data.tanggal}</h4>
                            <p>{data.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Berita