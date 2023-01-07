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

export const Main = styled.div`
  padding-block: 2rem;
`;

export const P = styled.p`
  font-size: 1.5rem;
  font-family: var(--ff-code);
  color: var(--gray-100);
  line-height: 1.5;
  text-align: left;
`;

export const InputFiled = styled.input`
  font-family: var(--ff-text);
  font-size: 1.5rem;
  color: var(--gray-100);
  width: 100%;
  border-radius: 0.25rem;
  margin-block: 1rem;

  :focus {
    box-shadow: 0 0 0 3px;
  }

  outline: 1px solid var(--gray-50);
  border: none;
  padding: 0.5rem;

  ::placeholder {
    color: var(--gray-50);
  }
`;
