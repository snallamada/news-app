import Items from "../components/Items";
import '../assets/news.css';
import useFetch from "../hooks/useFetch";

const News = () => {
  // Used custom hook useFetch to fetch the data
  const {articles} = useFetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e471f8c33ec4b7f880ef97f10dd8a9d`);
  
  return (
    <div className="container-fluid">
      <h1 className="headlines">Top Latest Headlines</h1>
      <div className="row row-cols-1 row-cols-md-3 row-eq-height" >
        {articles.map((article) => {
          return (
            <div className="col-sm-4  d-flex align-items-stretch" key={article.id}>
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}z
            />
            </div>
          );
        })}
      </div>
    </div>
  );
  //}
};
export default News;
