import Head from "next/head";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>

      <h1 className="content">About</h1>
    </>
  );
};

export default About;

// about sayfası içerisinde getLayout olarak bir fonksiyon tanımladık
// fonksiyon önce sayfa içerisini gösterip sonra ise footer bilgisini vermekte
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
