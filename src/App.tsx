import { GithubActivity } from "./components/GithubActivity";
import { Links } from "./components/Links";
import "./scss/app.scss";

export const App = () => {
  return (
    <div className="app">
      <img alt="logo" className="app-profile" src="./logo-cropped.png" />
      <h1>Jeremiah Snow</h1>
      <Links />
      <GithubActivity />
    </div>
  );
};
