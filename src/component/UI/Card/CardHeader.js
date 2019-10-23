import React from "react";
import styled from "@emotion/styled";

const Header = ({ Elem, children, className = "", ...props }) => (
  <Elem
    {...props}
    className={`${
      className ? className + " card-header" : "card-header"
    }`}
  >
    {children}
  </Elem>
);

const CardHeader = styled(Header)`
  color: rgba(0, 0, 0, 0.85);
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.25rem;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-top: -0.25rem;

  a {
    background-color: transparent;
    text-decoration: none;
  }
`;

export default CardHeader;
