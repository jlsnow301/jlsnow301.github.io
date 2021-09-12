import { useDeno } from "aleph/react";
import React from "react";

import Logo from "~/components/logo.tsx";

const Home = () => {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Resume Page</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1>Jeremiah Snow</h1>
      <p className="links">
        <a className="button" href="/resume">
          View Resume - Browser
        </a>
        <a
          className="button"
          download="jeremiah_snow_resume.docx"
          href="/jeremiah_snow_resume.docx"
          target="_blank"
          rel="noopener noreferrer">
          Download Resume - DOCX
        </a>
        <a
          className="button"
          download="jeremiah_snow_resume.pdf"
          href="/jeremiah_snow_resume.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Download Resume - PDF
        </a>
      </p>
      <p className="copyinfo">Built using Aleph.js in Deno {version}</p>
    </div>
  );
};

export default Home;
