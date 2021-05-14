import style from '../components/resume.module.css'

function Resume(){
    return(
        <div className={style.body}>
            <h1>Currículo</h1>
            <br />
            <iframe src="https://github.com/tiagomol1/curriculo/blob/master/TiagoMurilo.pdf" width="100%"></iframe>
        </div>
    )
}

export default Resume;