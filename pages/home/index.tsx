import Head from "next/head";
import MainHeader from "../../component/header";


 function Home() {
  return (
    <div>
      <Head>
        <title>NPS Traders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main>

        <div className="container">
        <h1>This is main page</h1>
        </div>
      </main>
    </div>
  );
}


export default Home;
