import React from "react";
import "./index.css";
import { Card } from "./components/card/Card";
import { Book, MathTest } from "./components/card/Calculate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/multiPagesTest/Home";
import { About } from "./components/multiPagesTest/About";
import { Link } from "react-router-dom";
import Clock from "./components/card/Clocks";
import LoginControl from "./components/card/LoginControl";
import Nums from "./components/multiPagesTest/Nums";


class App extends React.Component {
  state = {
    animals: [
      { name: "cat", color: "gray" },
      { name: "dog", color: "black" },
      { name: "tiger", color: "orange" },
      { name: "fox", color: "ginger" },
      { name: "lion", color: "yellow" },
    ],
  };

  evetnHandler(x){
    console.log(x)
  }


  render() {
    console.log(this.state);

    let animal = this.state.animals;

    return (
      <div>
        <Router>
          <div className="App">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
                <li>
                  <Link to="/card">Card</Link>
                </li>
                <li>
                  <Link to="/clock">Clocks</Link>
                </li>
                <li>
                  <Link to="/login">LoginControl</Link>
                </li>
                <li>
                  <Link to="/nums">Nums</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<MathTest />} />
              <Route
                path="/book"
                element={<Book name="Example Book" year="2022" price="$999" />}
              />
              <Route
                path="/card"
                element={
                  <div className="container">
                    <Card name={animal[0].name} color={animal[0].color} />
                    <Card name={animal[1].name} color={animal[1].color} />
                    <Card name={animal[2].name} color={animal[2].color} />
                    <Card name={animal[3].name} color={animal[3].color} />
                    <Card name={animal[4].name} color={animal[4].color} />
                  </div>
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/clock" element={<Clock/>}/>
              <Route path="/login" element={<LoginControl/>}/>
              <Route path="/nums" element={<Nums/>}/>
            </Routes>
          </div>
        </Router>
        <div>
          <button onClick={() => this.evetnHandler('Jhonny')}>Push</button>

          <select onChange={() => this.evetnHandler('Dude')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
