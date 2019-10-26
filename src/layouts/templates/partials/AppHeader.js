/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { primaryLight, greyLight } from "../../../sass/_colors.scss";

const styles = css`
  align-items: center;
  background-color: ${primaryLight};
  box-shadow: 2px 1px 2px ${greyLight};
  display: flex;
  height: 4rem;
  justify-content: flex-start;
`;

const AppHeader = ({ children }) => (
  <header css={styles}>{children}</header>
);

export default AppHeader;
