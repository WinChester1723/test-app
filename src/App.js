import React from 'react';
import './index.css';
import { Card } from './components/card/Card';
import { Book, MathTest } from './components/card/Calculate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Используйте Routes вместо Switch
import { Home } from './components/multiPagesTest/Home';
import { About } from './components/multiPagesTest/About';

class App extends React.Component {
  render() {
    return (
      <Router>
                <div className='App'>
                    <Routes> // Используйте Routes вместо Switch
                        <Route path="/about" element={<About />} /> // Добавьте атрибут element
                        <Route path="/" element={<MathTest />} /> // Добавьте атрибут element
                        <Route path="/book" element={<Book name="Example Book" year="2022" price="$999" />} /> // Добавьте атрибут element
                        <Route path="/" element={<Card/>} /> // Добавьте атрибут element
                        <Route path='/home' element={<Home/>} />
                    </Routes>
                </div>
            </Router>
    );
  }
}

export default App;
