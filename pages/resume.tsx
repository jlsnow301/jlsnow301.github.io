import { useDeno } from "aleph/react";
import React from "react";

import Logo from "~/components/logo.tsx";

const Home = () => {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Resume Page</title>
        <link rel="stylesheet" href="../style/resume.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h2>Jeremiah Snow</h2>
      (206) 379-0109 • jlsnow.301@gmail.com • github.com/jlsnow301 •
      linkedin.com/in/jeremiahsnow301
      <div className="line" />
      <h3>Skills</h3>
      <b>Languages:</b> JavaScript, TypeScript, Java, Python, SQL
      <br />
      <b>Frameworks:</b> React, React Native, Node, MongoDB, Express, Deno, Expo
      <br />
      <b>Services:</b> AWS, Azure, Firebase, GitHub, Google Cloud Platform
      <br />
      <b>Environments:</b> Windows, Mac, Linux, Android, iOS
      <div className="line" />
      <h3>Projects</h3>
      2019-Present: <b>Junior Software Developer / Consulting</b> @ Freelance
      <ul>
        <li>
          React Native Engineer - Ambient Noise, a mobile audio touring
          application developed for Zillow.
        </li>
        <li>
          React Engineer - NSC:AD410 Serverless Artillery, automated cloud-based
          testing project.
        </li>
        <li>
          Project Lead - Inventory Tracker, a web application for scalalble,
          robust inventory logging.
        </li>
        <li>
          Full Stack Engineer - Financier, a fintech web application utilizing
          Plaid API.
        </li>
        <li>
          Contributor - TGStation, a top 15 GitHub repository and open source
          game.
        </li>
      </ul>
      <h3>Experience</h3>
      2015-2018: <b>Software Repair Technician</b> @ Multiple Locations
      <ul>
        <li>
          Developed a Windows script framework to automate repair and backup
          workflows
        </li>
        <li>
          Cross-trained employees in software and hardware repair, greatly
          increasing store ticket capacity
        </li>
        <li>
          Worked closely with local government offices and hospitals to
          troubleshoot and build robust, modern networks.
        </li>
        <li>
          Managed an extensive recycling program that repaired and refurbished
          electronics.
        </li>
      </ul>
      <div className="line" />
      <h3>Education</h3>
      <ul>
        <li>
          2019-2021 | Computer Science BAS | North Seattle College | Graduated
          07/2021
        </li>
        <li>
          2016-2018 | Computer Networking AAS | Belmont College, OH | Graduated
          06/2018
        </li>
      </ul>
      <div className="footer">
        <a className="button" href="/">
          Return
        </a>
        <p className="copyinfo">Built using Aleph.js in Deno {version}</p>
      </div>
    </div>
  );
};

export default Home;
