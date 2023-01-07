import { Container, Title, Main, P, Character, InputFiled } from "./style";
import { useRef, useState, memo, useReducer, Reducer, useEffect } from "react";

function text() {
  return 'Professionally printed material in English typically does not indent the first paragraph, but indents those that follow. For example, Robert Bringhurst states that we should "Set opening paragraphs flush left'.split(
    ""
  );
}

interface State {
  activeIndex: number;
  inputText: string;
  time: number;
  testText: string[];
  correctWord: number;
}

interface Action {
  payload?: any;
  type: "reset" | "on-change" | "init" | "time";
}

const initState: State = {
  activeIndex: 0,
  inputText: "",
  time: 0,
  testText: [],
  correctWord: 0,
};

function reducer(prevState: State, action: Action) {
  const { payload, type } = action;

  switch (type) {
    case "on-change":
      const textArray: string[] = payload.split(" ");
      const correctWord = prevState.testText.filter(
        (item) => textArray.indexOf(item) !== -1
      ).length;

      return {
        ...prevState,
        inputText: payload as string,
        activeIndex: payload.length as number,
        correctWord: correctWord,
      };

    case "reset":
      return {
        ...action.payload,
        testText: prevState.testText,
      };

    case "time":
      return {
        ...prevState,
        time: prevState.time + 1,
      };

    case "init":
      return {
        ...prevState,
        testText: action.payload,
      };

    default:
      throw new Error("out of test");
  }
}

function App() {
  const { current: Text } = useRef(text());
  const inputRef = useRef<null | HTMLInputElement>(null);
  const id = useRef(0);
  const [{ correctWord, inputText, testText, time }, dispatch] = useReducer<
    Reducer<State, Action>
  >(reducer, initState);

  const proccessInput = (value: string) => {
    dispatch({ type: "on-change", payload: value });

    if (value.length >= Text.length) {
      if (inputRef.current) {
        inputRef.current.disabled = true;
      }
      clearInterval(id.current);
      return;
    }
  };

  const handleStart = () => {
    clearInterval(id.current);
    dispatch({ type: "reset", payload: initState });
    if (inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus({ preventScroll: true });
    }
    id.current = setInterval(() => {
      dispatch({ type: "time" });
    }, 1000);
  };

  useEffect(() => {
    dispatch({ type: "init", payload: Text.join("").split(" ") });
    if (inputRef.current) {
      inputRef.current.disabled = false;
    }
  }, [Text]);

  return (
    <Container>
      <Title>Speed Test</Title>
      {correctWord + JSON.stringify(testText.slice(-10, -1)) + time}
      <Main>
        <P>
          {Text.map((text, index) => (
            <C text={text} index={index} input={inputText} />
          ))}
        </P>
        <InputFiled
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(evt) => proccessInput(evt.target.value)}
          placeholder="Start Typing"
        />
        {inputText}
        <button onClick={handleStart}>Start</button>
      </Main>
    </Container>
  );
}

export default App;

const C = memo(
  ({ input, index, text }: { input: string; index: number; text: string }) => (
    <Character
      className={
        input.length === index
          ? "active"
          : text === input[index]
          ? "correct"
          : input.length > index
          ? "incorrect"
          : ""
      }
    >
      {text}
    </Character>
  )
);
