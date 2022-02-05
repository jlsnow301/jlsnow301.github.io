import { ModButton as Button } from "./components/elements/Button";
import { Image } from "./components/elements/Image";
import GitHubCalendar from 'react-github-calendar';
import "./components/css/app.css";

export const App = () => {
  
  return (
    <div className="app">
      <Image source="./logo-cropped.png" />
      <h1>Jeremiah Snow</h1>
      full stack web developer.
      <div className="app__buttons">
      <Button download href="/jeremiah_snow_resume.docx">
          Download Resume (WORD)
        </Button>
        <Button download href="/jeremiah_snow_resume.pdf">
          Download Resume (PDF)
        </Button>
        <Button href="https://www.github.com/jlsnow301">
          View Other Projects
        </Button>       
      </div>
      <div className="app__activity">
        <div className="app__activity-text">GitHub activity</div>
        <GitHubCalendar username="jlsnow301" />
      </div>
    </div>
  );
};
