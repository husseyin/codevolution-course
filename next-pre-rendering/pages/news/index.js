const NewAricleList = ({ articles }) => {
  return (
    <>
      <h1>List of NewAricleList</h1>

      {articles.map(article=>{
          return<div key={article.di}>
              <h2>{article.id} {article.title} | {article.category}</h2>
          </div>
      })}
    </>
  );
};

export default NewAricleList;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};
