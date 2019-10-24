/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { danger } from "../sass/_colors.scss";

const ErrorMsg = ({ message }) => (
  <p
    css={css`
      color: ${danger};
      font-weight: bold;
    `}
  >
    {message}
  </p>
);

export default ErrorMsg;
