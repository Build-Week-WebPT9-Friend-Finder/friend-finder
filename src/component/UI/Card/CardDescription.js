/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  clear: both;
  color: rgba(0, 0, 0, 0.68);
  margin-top: 0.5rem;
`;

const CardDescription = ({ children, className = "", ...props }) => (
  <div
    css={styles}
    {...props}
    className={`${
      className ? className + " card-description" : "card-description"
    }`}
  >
    {children}
  </div>
);

export default CardDescription;
