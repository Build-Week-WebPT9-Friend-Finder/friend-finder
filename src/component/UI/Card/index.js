/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import CardAvatar from "./CardAvatar";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardExtra from "./CardExtra";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardMeta from "./CardMeta";

const styles = css`
  background: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 1rem 0;
  max-width: 100%;
  min-height: 0;
  position: relative;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  width: 290px;

  &::after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &:first-child {
    border-radius: 4px 4px 0 0 !important;
    border-top: none !important;
  }

  * {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  a {
    cursor: pointer;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Card = ({ children, className = "", ...props }) => (
  <div
    {...props}
    css={styles}
    className={`${className ? className + " card" : "card"}`}
  >
    {children}
  </div>
);

export default Card;
export {
  CardAvatar,
  CardContent,
  CardDescription,
  CardExtra,
  CardHeader,
  CardImage,
  CardMeta,
};
