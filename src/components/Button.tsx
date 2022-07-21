import React, { ReactNode } from "react";
import {
  faBug,
  faFilePdf,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../scss/button.scss";

type Props = {
  children: ReactNode;
  download?: boolean;
  icon: string;
  to: string;
};

export const Button: React.FC<Props> = (props) => {
  const { icon } = props;
  let targetIcon: IconProp;
  switch (icon) {
    case "file-pdf":
      targetIcon = faFilePdf;
      break;
    case "file-word":
      targetIcon = faFileWord;
      break;
    case "linkedin":
      targetIcon = faLinkedin;
      break;
    case "github":
      targetIcon = faGithub;
      break;
    default:
      targetIcon = faBug;
  }

  return (
    <a
      className="button"
      download={props.download && props.to.slice(1)}
      href={props.to}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={targetIcon} size="lg" />
      <div className="button-text">{props.children}</div>
    </a>
  );
};
