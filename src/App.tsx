import { Container, Title } from "./style";

function App() {
  return (
    <Container>
      <Title>Speed Test</Title>
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
