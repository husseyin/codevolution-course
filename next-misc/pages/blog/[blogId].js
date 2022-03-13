import Head from "next/head";

// title ve description değerlerini her sayfa için dinamik hale getirdik
// böylece her blog sayfası için örn blog/1, blog/2... gibi
// head etiketi eklemiş olduk
const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <h1 className="content">
        {/* ekranda .env.local dosyası içerisinden gelen 
        username ve passowrd değeri görünmeyecektir çünkü
        bunlar nextjs güvenlik açısından kapamakta 
        Env User:{process.env.DB_USER} Passowrd:{process.env.DB_PASSWORD} */}
        En Analytics: {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
};

export default Blog;

// npm run export komutunu kullanabilmek için kullanmak zorundayız
// çünkü dynamic bir sayfa
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          blogId: "1",
        },
      },
    ],
    //export işlemi için fallback:false olmalı
    fallback: false,
  };
};

// getStaticProps fonksiyonu ile title ve description tanımladık
export const getStaticProps = async () => {
  // .env.local dosyası içerisinde örnek username ve password verdik
  // burada environment dosyasına erişek örnek olarak girilen
  // username ve password değerlerini çektik
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${user} and passowrd ${password}`
  );

  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
};
