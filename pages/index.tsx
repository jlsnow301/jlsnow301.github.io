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
      <p className="links"></p>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  );
};

export default Home;
