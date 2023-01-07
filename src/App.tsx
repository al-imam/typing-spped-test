import { Container, Title, Main, P, Character, InputFiled } from "./style";
import { useRef, useState, memo } from "react";

function text() {
  return 'Professionally printed material in English typically does not indent the first paragraph, but indents those that follow. For example, Robert Bringhurst states that we should "Set opening paragraphs flush left'.split(
    ""
  );
}

function App() {
  const { current: Text } = useRef(text());
  const [input, setInput] = useState("");
  return (
    <Container>
      <Title>Speed Test</Title>
      <Main>
        <P>
          {Text.map((text, index) => (
            <C text={text} index={index} input={input} />
          ))}
        </P>
        <InputFiled
          type="text"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          placeholder="Start Typing"
        />
        {input}
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
