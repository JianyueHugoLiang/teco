import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from './Container';
import Prose from './Prose';

const ArticleLayout = ({ children, meta, isRssFeed, previousPathname }) => {
  const router = useRouter();

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const backButton = (
    <button
      type="button"
      onClick={() => router.push(previousPathname)}
      className="back-button"
    >
      ← Back
    </button>
  );

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      {previousPathname && backButton}
      <Container>
        {isRssFeed ? (
          children
        ) : (
          <article>
            <h1>{meta.title}</h1>
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            <Prose>{children}</Prose>
          </article>
        )}
      </Container>
      <style jsx global>{`
        body {
          background-color: #fff;
          color: #333;
          font-family: sans-serif;
          font-size: 16px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
        }

        article {
          margin-top: 2rem;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        time {
          color: #666;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .back-button {
          background-color: #333;
          border: none;
          border-radius: 0.25rem;
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
        }

        .back-button:hover {
          background-color: #666;
        }

        .back-button:focus {
          box-shadow: 0 0 0 2px #333;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default ArticleLayout;