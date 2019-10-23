/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
`;

const CardMeta = ({ children, className = "", ...props }) => (
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

export default CardMeta;
