/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const styles = css`
  background: rgba(0, 0, 0, 0.05);
  display: block;
  flex: 0 0 auto;
  padding: 0;
  position: relative;
`;

const CardImage = ({ img, alt = "", className = "" }) => (
  <div
    css={styles}
    className={`${
      className ? className + " card-image" : "card-image"
    }`}
  >
    <img src={img} alt={alt} />
  </div>
);

export default CardImage;
