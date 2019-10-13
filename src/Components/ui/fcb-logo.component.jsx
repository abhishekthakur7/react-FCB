import React from "react";
import { Link } from "react-router-dom";

import fcblogo from "../../Resources/images/logos/fcb-logo.svg";

export const FcbLogo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${fcblogo}) no-repeat`
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
