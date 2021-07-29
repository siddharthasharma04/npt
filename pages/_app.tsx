import '../styles/main.scss';

import MainHeader from "../component/header";
import MainFooter from "../component/footer";
function MyApp({ Component, pageProps }) {
  return (<div className="wrapper">
  <MainHeader />
  <Component {...pageProps} />
  <MainFooter />
  </div>)
}

export default MyApp
