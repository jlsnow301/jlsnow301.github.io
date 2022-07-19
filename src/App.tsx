import { GithubActivity } from "./components/GithubActivity";
import { LinkButtons } from "./components/LinkButtons";

import "./components/css/app.css";

export const App = () => {
  return (
    <div className="app">
      <img alt="logo" className="image" src="./logo-cropped.png" />
      <h1>Jeremiah Snow</h1>
      full stack web developer.
      <LinkButtons />
      <GithubActivity />
    </div>
  );
};
