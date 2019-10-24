/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AppHeader from "./partials/AppHeader";
import Logo from "../../component/Logo";

const styles = css`
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow-x: hidden;
  width: 100%;
`;

const SqueezePage = ({ children }) => (
  <div className="app-wrapper" css={styles}>
    <AppHeader>
      <Logo />
    </AppHeader>
    {children}
  </div>
);

export default SqueezePage;
