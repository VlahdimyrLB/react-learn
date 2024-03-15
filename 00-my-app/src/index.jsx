// import React from "react";
import ReactDOM from "react-dom/client";

const Name = () => <h1>My name is Vlahdimyr Bambalan</h1>;
const Messages = () => {
  return <p>Good Evening Everyone</p>;
};

function Greeting() {
  return (
    <div>
      <Name />
      <Messages />
    </div>
  );
}

//to render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
