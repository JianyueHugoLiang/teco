import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import glob from "fast-glob";

const articlesDirectory = path.join(process.cwd(), "articles");

export async function getAllArticles() {
  const files = await glob("**/*.md", {
    cwd: articlesDirectory,
  });

  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const matterResult = matter(fileContents);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      return {
        slug: file.replace(/\.md$/, ""),
        frontMatter: matterResult.data,
        contentHtml,
      };
    })
  );

  return articles.sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });
}