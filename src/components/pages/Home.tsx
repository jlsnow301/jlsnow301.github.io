import { ModButton as Button } from "../elements/Button";
import { Image } from "../elements/Image";
import "../css/home.css";

export const Home = () => {
  return (
    <div className="home">
      <Image source="./logo-cropped.png" />
      <h1>Jeremiah Snow</h1>
      Professional Details
      <div className="home__buttons">
        <Button>Coming Soon - Browser</Button>
        <Button download href="/jeremiah_snow_resume.docx">
          Download Resume - WORD
        </Button>
        <Button download href="/jeremiah_snow_resume.pdf">
          Download Resume - PDF
        </Button>
        <Button href="https://www.github.com/jlsnow301/jlsnow301.github.io">
          View Website Repository
        </Button>
      </div>
    </div>
  );
};
