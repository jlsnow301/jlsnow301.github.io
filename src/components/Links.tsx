import React from "react";
import { Button } from "./Button";

export const Links: React.FC = (props) => {
  return (
    <div className="links">
      <Button download icon="file-word" to="/jeremiah_snow_resume.docx">
        Resume.docx
      </Button>
      <Button download icon="file-pdf" to="/jeremiah_snow_resume.pdf">
        Resume.pdf
      </Button>
      <Button icon="github" to="https://www.github.com/jlsnow301">
        View GitHub
      </Button>
    </div>
  );
};
