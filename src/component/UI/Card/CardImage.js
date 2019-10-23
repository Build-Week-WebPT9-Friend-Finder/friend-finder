/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const CardImage = ({ img, alt = "" }) => (
  <div>
    <img src={img} alt={alt} />
  </div>
);

export default CardImage;
