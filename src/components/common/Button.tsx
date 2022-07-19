import React, { ReactNode } from "react";

import "../css/button.css";

type Props = {
  children: ReactNode;
  download?: boolean;
  to: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <a
      className="button"
      download={props.download && props.to.slice(1)}
      href={props.to}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  );
};
