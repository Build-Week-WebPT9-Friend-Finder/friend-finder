/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  border-radius: 500rem;
  display: inline-block;
  height: 2rem;
  margin-right: 0.25rem;
  width: 2rem;
`;

const CardAvatar = ({ img, alt = "", className = "", ...props }) => (
  <img
    {...props}
    css={styles}
    className={`${
      className ? className + " card-avatar" : "card-avatar"
    }`}
    src={img}
    alt={alt}
  />
);

export default CardAvatar;
