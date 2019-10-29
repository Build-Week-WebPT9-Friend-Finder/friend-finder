/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { primaryDark, white } from "../../../sass/_colors.scss";

const styles = css`
  background-color: ${primaryDark};
  border: none !important;
  border-radius: 4px;
  color: ${white};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease;
  width: 7rem;

  &:hover {
    background-color: rgba(121, 65, 102, 0.85);
  }
`;

const ButtonPrimary = ({ children }) => (
  <button css={styles}>{children}</button>
);

export default ButtonPrimary;
