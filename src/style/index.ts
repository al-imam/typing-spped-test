import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { IoIosSpeedometer } from "react-icons/io";

export const Container = styled.div`
  width: min(calc(100vw - 3rem), 76rem);
  margin-inline: auto;
  padding-inline: 2rem;
  background-color: aliceblue;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  font-family: "Martian Mono", sans-serif;
  padding: 10px 0;
  border-bottom: 2px var(--gray-50) solid;
`;

export const TimeIcon = styled(AiFillClockCircle)`
  width: 25px;
  height: auto;
  position: relative;
  color: var(--gray-100);
  top: -1px;
`;
export const SpeedIcon = styled(IoIosSpeedometer)`
  width: 25px;
  height: auto;
  position: relative;
  color: var(--gray-100);
  top: -1px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Info = styled.div`
  padding: 5px 0;
  display: flex;
  gap: 5px;
`;

export const Character = styled.span`
  font-family: "Martian Mono", sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--gray-100);
`;

export const P = styled.p`
  color: #a8a8a8;
  text-align: left;
  padding-block: 1rem;
  user-select: none;

  & span.active {
    background-color: #d3e9ff;
  }

  & span.correct {
    color: rgba(105, 161, 214, 255);
  }

  & span.incorrect {
    color: rgba(98, 70, 68, 255);
    background-color: rgba(254, 204, 203, 255);
  }
`;

export const TextWrapper = styled.div`
  padding: 10px 15px;
`;

export const InputFiled = styled.input`
  position: absolute;
  left: -100vw;
  top: 300px;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: black;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  border: 3px #d3e9ff solid;
  background-color: rgba(105, 161, 214, 255);
  text-align: center;
  display: block;
  margin: 10px auto;
`;

export const Main = styled.div`
  padding-block: 2rem;
`;
