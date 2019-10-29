/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { danger } from "../sass/_colors.scss";

const ErrorMsg = ({ message }) => (
  <p
    css={css`
      color: ${danger};
      font-weight: bold;
      margin-top: -10px;
      margin-bottom: 0.5rem;
    `}
  >
    {message}
  </p>
);

export default ErrorMsg;
