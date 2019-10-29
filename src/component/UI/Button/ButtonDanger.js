/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { danger, white } from "../../../sass/_colors.scss";

const styles = css`
  background-color: ${danger};
  border: none !important;
  border-radius: 4px;
  color: ${white};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease;
  width: 7rem;

  &:hover {
    background-color: rgba(163, 22, 33, 0.7);
  }
`;

const ButtonDanger = ({ children }) => (
  <button css={styles}>{children}</button>
);

export default ButtonDanger;
