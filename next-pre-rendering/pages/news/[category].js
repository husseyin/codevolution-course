const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  //terminalde, { category: 'Sports' }
  console.log(query);

  //terminalde, name=Vishwas
  console.log(req.headers.cookie);

  //burada tarayıcının Application/Cookie kısmına atama yapıyoruz
  res.setHeader("Set-Cookie", ["name=Vishwas"]);

  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: { articles: data, category },
  };
};
