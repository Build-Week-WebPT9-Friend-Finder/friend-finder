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

const Card = props => <div>{props.children}</div>;

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
