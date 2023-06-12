import { getAllArticles } from "@/lib/getAllArticles";
import Article from "@/components/Article";

function ArticlesIndex({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: {
      articles,
    },
  };
}

export default ArticlesIndex;