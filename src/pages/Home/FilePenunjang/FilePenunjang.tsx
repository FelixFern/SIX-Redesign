import { AiOutlineCloudDownload } from 'react-icons/ai'
import './styles.scss'

type filePenunjangBtnProps = {
    title: string, 
    link: string, 
}

type filePenunjangProps = {
    filePenunjang: Array<any>
}

const FilePenunjangButton = ({title, link} : filePenunjangBtnProps) => {
    return (
        <a className='filePenunjangBtn-parent' href={link}>
            <i><AiOutlineCloudDownload></AiOutlineCloudDownload></i>
            <h3>{title}</h3>
        </a>
    )
}

const FilePenunjang = ({filePenunjang} : filePenunjangProps) => {
    return (
        <div className='filePenunjang-parent'>
            <h4 className='section-title'>File Penunjang</h4>
            <div className="filePenunjang-list">
                {filePenunjang.map((data) => {
                    return (
                        <div className="filePenunjang">
                            <FilePenunjangButton title={data.title} link={data.link}></FilePenunjangButton>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FilePenunjang