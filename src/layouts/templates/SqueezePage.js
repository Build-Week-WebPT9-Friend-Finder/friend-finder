/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import AppHeader from "./partials/AppHeader";
import Logo from "../../component/Logo";

const SqueezePage = props => (
  <>
    <AppHeader>
      <Logo />
    </AppHeader>
  </>
);

export default SqueezePage;
