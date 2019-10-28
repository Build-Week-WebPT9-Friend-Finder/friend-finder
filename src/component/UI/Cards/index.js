/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  &::after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  > .card {
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    display: flex;
    flex-direction: column;
    float: none;
    font-size: 1rem;
    justify-content: center;
    margin: 0.5rem;
    max-width: 100%;
    min-height: 0;
    padding: 0;
    position: relative;
    transition: box-shadow .1s ease,transform .1s
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    width: 290px;
  }
`;

const Cards = ({ children, className = "", ...props }) => (
  <div
    {...props}
    css={styles}
    className={`${className ? className + " cards" : "cards"}`}
  >
    {children}
  </div>
);

export default Cards;
