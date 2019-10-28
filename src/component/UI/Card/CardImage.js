/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  background: rgba(0, 0, 0, 0.05);
  display: block;
  flex: 0 0 auto;
  padding: 0;
  position: relative;
  text-align: center;

  img {
    height: auto;
    max-width: 290px;
    min-width: 200px;
  }
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
