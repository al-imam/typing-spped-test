import styled from "styled-components";

export const Container = styled.div`
  width: min(calc(100vw - 3rem), 76rem);
  margin-inline: auto;
  padding-inline: 2rem;
  background-color: aliceblue;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  font-family: var(--ff-text);
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 5px solid rgba(20 20 20 / 0.1);
`;
