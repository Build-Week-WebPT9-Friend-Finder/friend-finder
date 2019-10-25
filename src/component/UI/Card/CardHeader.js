/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  color: rgba(0, 0, 0, 0.85);
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.25rem;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-top: -0.25rem;

  a {
    background-color: transparent;
    text-decoration: none;
  }
`;

const CardHeader = ({
  children,
  className = "",
  Elem = "h3",
  ...props
}) => (
  <Elem
    css={styles}
    {...props}
    className={`${
      className ? className + " card-header" : "card-header"
    }`}
  >
    {children}
  </Elem>
);

export default CardHeader;
