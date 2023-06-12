import React from "react";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

const globalStyles = `
  body {
    background-color: white;
    color: black;
  }
`;

const articleStyles = {
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  date: {
    fontSize: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
};

const backButtonStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  button: {
    backgroundColor: "#4B5563",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#1F2937",
    },
  },
};

const BackButton = ({ href, children, variant }) => {
  const variantStyles = {
    primary: {
      backgroundColor: "#4B5563",
      color: "white",
    },
    secondary: {
      backgroundColor: "#F3F4F6",
      color: "#4B5563",
    },
  };

  const buttonStyles = clsx(
    backButtonStyles.button,
    variantStyles[variant]
  );

  return (
    <div style={backButtonStyles.container}>
      <Link href={href}>
        <a style={buttonStyles}>{children}</a>
      </Link>
    </div>
  );
};

const ArticleLayout = ({ title, date, backButtonVariant, children }) => {
  return (
    <>
      <Head>
        <style>{globalStyles}</style>
        <title>{title}</title>
      </Head>
      <article>
        <h1 style={articleStyles.title}>{title}</h1>
        <p style={articleStyles.date}>{date}</p>
        {children}
      </article>
      <BackButton href="/" variant={backButtonVariant}>
        Back to Home
      </BackButton>
    </>
  );
};

export default ArticleLayout;
