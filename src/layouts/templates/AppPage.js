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

const AppPage = ({ children }) => (
  <div className="app-wrapper" css={styles}>
    <AppHeader>
      <Logo />
      {/* Nav here when Router structure allows it */}
    </AppHeader>
    {children}
  </div>
);

export default AppPage;
