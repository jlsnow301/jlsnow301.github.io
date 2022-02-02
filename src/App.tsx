import { ModButton as Button } from "./components/elements/Button";
import { Image } from "./components/elements/Image";
import "./components/css/app.css";

export const App = () => {
  return (
    <div className="app">
      <Image source="./logo-cropped.png" />
      <h1>Jeremiah Snow</h1>
      Professional Details
      <div className="app__buttons">
        <Button download href="/jeremiah_snow_resume.pdf">
          Download Resume - PDF
        </Button>
        <Button download href="/jeremiah_snow_resume.docx">
          Download Resume - WORD
        </Button>
        <Button href="https://www.github.com/jlsnow301">
          View Other Projects
        </Button>
      </div>
    </div>
  );
};
