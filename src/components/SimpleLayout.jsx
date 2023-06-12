import Head from "next/head";

function SimpleLayout({ children, pageTitle, pageDescription }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main>
        {children}
      </main>
    </div>
  );
}

export default SimpleLayout;