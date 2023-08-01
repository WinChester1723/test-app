import React from "react";

export const Book = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  );

//   React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.year),
//     React.createElement("p", {}, props.price),
//   ]);
};

export const MathTest = () => {
  return (
    <div>
      <Book name="Jhonny" year="2018" price="1000$" />
      <Book name="React" year="2020" price="987$" />
      <Book name="Vue JS" year="2023" price="969$" />

      <div>
        <h2>Some Math methods:</h2>
        <h3>Fisrt Method: 12 + 12</h3>
        <h3>Second Method: {12 + 15}</h3>
        <h3>Third Method: {"12" + 12}</h3>
        <h3>Fourth Method: {12 + "18"}</h3>
        <h3>Fivth Method: {"12" + "13" - "15"}</h3>
        <h3>Sixth Method: {Math.round(5 + Math.random() * 95)}</h3>
      </div>
    </div>
  );

//   React.createElement("div", {}, [
//     React.createElement(
//       "h1",
//       { id: "hello", className: "class1" },
//       "Hello from React"
//     ),
//     React.createElement(Book, { name: "Jhonny", year: 2018, price: "1000$" }),
//     React.createElement(Book, { name: "React", year: 2020, price: "987$" }),
//     React.createElement(Book, { name: "Vue JS", year: 2023, price: "969$" }),
//   ]);
};