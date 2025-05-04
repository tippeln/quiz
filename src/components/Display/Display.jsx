import { useEffect, useState } from "react";

function Display(props) {
  const [text, setText] = useState("Loading･･･");

  // const { count } = props;
  // console.log("count", count);
  useEffect(() => {
    setTimeout(() => {
      setText(`カウント：${props.count}`);
    }, 3000);
  }, []);

  useEffect(() => {
    setText(`カウント：${props.count}`);
  }, [props.count]);

  console.log("text", text);
  return <div>{text}</div>;
}
export default Display;
