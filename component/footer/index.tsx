import css from './footer.module.scss';


const MainFooter = () => {
    return (<footer>
        <div className={css.inner}>
            <div className="container">
                <div className={`row ${css.top}`}>
                    <div className="col-4">
                        <h3>Customer Services</h3>
                        <ul className="navbar">
                            <li>Help Center</li>
                            <li>Get Started with us</li>
                            <li>FAQs</li>
                            <li>Claims</li>
                            <li>Change Delivery</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>This Site</h3>
                        <ul className="navbar">
                            <li>Store</li>
                            <li>Tracking</li>
                            <li>Products</li>
                            <li>Support</li>
                            <li>Profiling</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>Company Info</h3>
                        <ul className="navbar">
                            <li>About NPS Traders</li>
                            <li>Media Relations</li>
                            <li>Investor Relations</li>
                            <li>Career</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <div className={css.bottom}>
                    <p className="text-center">
                        &copy; 2021
                    </p>
                </div>
            </div>
        </div>
    </footer>)
}

export default MainFooter;