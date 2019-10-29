/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem auto;
`;

const ButtonRow = ({ children }) => (
  <div css={styles}>{children}</div>
);

export default ButtonRow;
