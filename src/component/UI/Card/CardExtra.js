/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  background: 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.4);
  flex-grow: 0;
  left: 0;
  margin: 0 0;
  max-width: 100%;
  min-height: 0 !important;
  padding: 0.75rem 1rem;
  position: static;
  top: 0;
  transition: color 0.1s ease;
  -webkit-box-flex: 0;
  width: auto;

  &::after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

const CardExtra = ({ children, className = "", ...props }) => (
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

export default CardExtra;
