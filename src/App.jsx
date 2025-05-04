import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Hello World</h1>
      <Button type="submit" disable={true} onClick={handleClick}>
        <span>ボタン</span>
      </Button>
      <Display count={count} />
    </>
  );
}

export default App;
