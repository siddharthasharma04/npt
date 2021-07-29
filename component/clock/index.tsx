import css from './clock.module.scss';
const CssClock = (props) =>{
    return <div className={css.clock}>
        <div className={css.min}></div>
        <div className={css.sec}></div>
        <img src="assets/images/logo/logo-icon.svg" alt="log" />
    </div>
}

export default CssClock;