import Link from "next/link";

//metodun productId değeri almasını sağlayığ default değer olarak 100 verdik
const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href={`/`}>
        <a>Home</a>
      </Link>
      <h2>
        <Link href={`/product/1`}>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/2`}>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        {/* replace komutu sayfaya yönlendikten sonra geri basınca anasayfaya yönlendirir */}
        <Link href={`/product/3`} replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        {/* ${} simgeleri ile metin içerisine parametre girebiliriz */}
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
};

export default ProductList;
