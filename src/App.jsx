import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Demo from "./Demo";

function App() {
  // The React useState Hook allows us to track state in a function component.
  // usestate return an array with 2 values [currentState,setterFunction]
  //  useState takes in one parameter which is the initialValue
  // the setterfunction updates the current state
  // useState accepts all datatypes

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  let count = 0;

  const addTodo = () => {
    const add = {
      id: count + 1,
      message: text,
    };
    setTodo([...todo, add]);
    // setTodo((prev) => [...prev, add]);
  };

  console.log(todo);

  return (
    <>
      <section id="center">
        {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
        <div>
          {" "}
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button className="counter" onClick={() => addTodo()}>
            {" "}
            Enter{" "}
          </button>
        </div>
        {todo.map((todo) => (
          <button className="counter">my {todo.message} </button>
        ))}{" "} */}
        <Demo/>
       
      </section>
    </>
  );
}

export default App;
