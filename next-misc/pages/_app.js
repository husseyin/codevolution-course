// jsconfig.json dosyası içerisindeki tanımlama ile
// from "../" olan kısımları yazmaya gerek kalmadı

import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  // gelen component içerisinde eğer getLayout fonksiyonu var ise
  // bu fonksiyona sayfa içeriklerini gönderiyoruz
  // böylece alttaki retrun aksine header ve footer alanı görünmeyecek
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
