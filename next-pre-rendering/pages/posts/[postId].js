import { useRouter } from "next/router";

const Post = ({ post }) => {
  //getStaticPaths fallback:true yaptık böylece arnan id yoksa istenilen
  //yere yönelendirebiliriz burada ekrana Loading... yazdırdık
  //ekrana loading.. yazıldıktan datalar arasından 4 numaralı id yüklenecektir
  //çünkü artık getStaticPaths devereye girecek ve id değerine ait sayfayı
  //static yapıp oluşturarak ekrana gösterecektir
  const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      {/* dynamic SSG için getStaticProps ile getStaticPaths kullanımı zorunlu  */}

      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  // const paths = data.map((post) => {
  //   params: {
  //     postId: post.id.toString();
  //   }
  // });

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths,

    //fallback üç farklı kullanımı var
    //fallback:false, fallback:true, fallback:'blocking'
    //fallback:false => eğer aranan id değeri yoksa 404 sayfasını gelir
    //fallback:true => aranan id yoksa 404 sayfasına değil belirlenen yere yönlenir
    fallback: 'blocking',
  };
};

//url üzerinden gelecek olan id değerini yakalamak için context ekledik
export const getStaticProps = async (context) => {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  //eğer dataların arasında aranan id eğeri yoksa ekrana 404 sayfasını gösterecektir
  if (!data.id) {
    return { notFound: true };
  }

  //burası npm run build edildiğinde çalışmacak çünkü postId soracaktır
  //sorunun çözümü Post metodunda router.isFallback kullanmak çünkü fallback:true yaptık
  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: { post: data },
  };
};
