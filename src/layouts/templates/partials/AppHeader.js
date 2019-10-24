/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { primaryLight, greyLight } from "../../sass/_colors.scss";

const styles = css`
  background-color: ${primaryLight};
  box-shadow: 2px 1px 2px ${greyLight}
  height: 4rem;
`;

const AppHeader = ({ children }) => (
  <header css={styles}>{children}</header>
);

export default AppHeader;
