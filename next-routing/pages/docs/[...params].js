import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  // const { params } = router.query;
  // console.log(params);
  //undefined
  //["feature1", "concept1", "example1"]
  //pre-rendering olayında dolayı ilk olarak undefined geldi

  //burada params değerine boş dizi atadık böylede undefiend gelmeyecek
  //params dizi boyutuna göre de ekrana birden fazla query erişimi olacak
  //tabi buradaki params dizi olduğu için belirli bir sınırı var
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for {params[0]} and {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs {params[0]}</h1>;
  }

  console.log(params);

  return <h1>Docs Home Page</h1>;
};

export default Doc;

//link üzerinde /docs/feature1 yazdığımızda bu direk bu sayfaya gelir
//aynı şekilde /docs/feature1/concept1/example1 yazıldığında bu sayfa çalışır
//buaradaki amaç her sayfa için dosya oluşturmadan tek sayfa üzerinden gitmek
