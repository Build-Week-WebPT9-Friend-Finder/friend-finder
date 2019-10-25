import React from "react";
import styled from "styled-components";

const SurveyButton = styled.button`
width: 100px;
height: 30px;
background: ${props => (props.primary ? "#fff" : "#2a2223")}
color: ${props => (props.primary ? "#2a2223" : "#fff")};
border: 0;
margin: 5px 10px;
transition: 0.2s ease-in;
border-radius: 20px;
width: 200px;
margin: 2%;
font-size: 0.9rem;
&:hover {
    color: Black;
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")}'
}
`;

export default function UseButton() {
  return <SurveyButton>Take Survey</SurveyButton>;
}
