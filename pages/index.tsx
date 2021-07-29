import Head from "next/head";
import CssClock from "../component/clock";


 function Home() {
  return (
    <>
      <Head>
        <title>NPS Traders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main>

        <div className="container">
        <h1 className="text-center">We Are Coming Soon</h1>
        <div className="tag">
          <CssClock />
        </div>
        </div>
      </main>
    </>
  );
}


export default Home;
