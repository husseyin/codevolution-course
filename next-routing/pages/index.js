import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  // router ile url erişimi sağladık
  const router = useRouter();

  // buttonun click eventinden sonra yönlendiği metot
  const handleClick = () => {
    console.log("Placing your order");

    // url kısmına /product query olarak verecek
    router.push(`/product`);
  };

  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Link href={`/blog`}>
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href={`/product`}>
          <a>Products</a>
        </Link>
      </div>

      {/* sayfaya button koyup tıklama eventi verdik */}
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
