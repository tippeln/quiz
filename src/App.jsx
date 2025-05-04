import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("click!!!!!!!!");
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button type="submit" disable={true} onClick={handleClick}>
        <span>button</span>
      </Button>
    </>
  );
}

export default App;
