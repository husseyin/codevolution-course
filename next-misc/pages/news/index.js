const News = ({ data }) => {
  return (
    <>
      <h1 className="content">{data}</h1>
    </>
  );
};

export default News;

export const getStaticProps = async (context) => {
  // preview modda çalıştığını görebilmek için
  // http://localhost:3000/api/preview?redirect=/news
  // link üzerinden /news sayfasını çağırıyoruz

  // link üzerinden çağırma yaptığımız içinde sayfa refresh edilse dahi
  // preview modda kalmaya devam edecektir

  console.log("Running getStaticProps", context.previewData);

  return {
    props: {
      data: context.preview
        ? "List of DRAFT articles"
        : "List of PUBLISHED articles",
    },
  };
};
