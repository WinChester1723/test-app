import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Book = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  );

  // React.createElement("div", {}, [
  //   React.createElement("h2", {}, props.name),
  //   React.createElement("p", {}, props.year),
  //   React.createElement("p", {}, props.price),
  // ]);
};

const App = () => {
  return (
    <div>
      <Book name="Jhonny" year="2018" price="1000$" />
      <Book name="React" year="2020" price="987$" />
      <Book name="Vue JS" year="2023" price="969$" />
    </div>
  );

  // React.createElement("div", {}, [
  //   React.createElement(
  //     "h1",
  //     { id: "hello", className: "class1" },
  //     "Hello from React"
  //   ),
  //   React.createElement(Book, { name: "Jhonny", year: 2018, price: "1000$" }),
  //   React.createElement(Book, { name: "React", year: 2020, price: "987$" }),
  //   React.createElement(Book, { name: "Vue JS", year: 2023, price: "969$" }),
  // ]);
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
