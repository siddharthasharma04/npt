import css from './logo.module.scss';

const HeaderLogo = () => (
    <div className={css.wrap} role="img" aria-label="NPS TRADERS (developing era)">
        <div className={`${css.img}`}>
            <img src="assets/images/logo/logo-icon.svg" alt="Logo" aria-hidden="true" />
        </div>
        <div className={`${css.content}`} aria-hidden="true">
            <span className={`${css.main}`}>NP TRADERS</span>
            <span className={css.small}>developing era</span>
        </div>
    </div>
)

export default HeaderLogo;