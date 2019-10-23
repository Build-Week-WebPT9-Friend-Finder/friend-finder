/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  background: 0 0;
  border: none;
  border-radius: 0;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
  flex-grow: 1;
  font-size: 1rem;
  margin: 0;
  padding: 1rem 1rem;
  transition: color 0.1s ease;

  &::after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

const CardContent = ({ children, className = "", ...props }) => (
  <div
    {...props}
    css={styles}
    className={`${
      className ? className + " card-content" : "card-content"
    }`}
  >
    {children}
  </div>
);

export default CardContent;
