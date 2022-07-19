import React from "react";
import { Button } from "./common/Button";

export const LinkButtons: React.FC = (props) => {
  return (
    <div className="links">
      <Button download to="/jeremiah_snow_resume.docx">
        Download Resume (WORD)
      </Button>
      <Button download to="/jeremiah_snow_resume.pdf">
        Download Resume (PDF)
      </Button>
      <Button to="https://www.github.com/jlsnow301">View Other Projects</Button>
    </div>
  );
};
