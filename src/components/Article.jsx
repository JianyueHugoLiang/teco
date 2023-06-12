import Card from "./Card";
import { formatDate } from "@/lib/date";

function Article({ article }) {
  return (
    <Card>
      <h2>{article.frontMatter.title}</h2>
      <p>{article.frontMatter.description}</p>
      <p>{formatDate(article.frontMatter.date)}</p>
      <a href={`/articles/${article.slug}`}>Read more</a>
    </Card>
  );
}

export default Article;