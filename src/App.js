import React from 'react';
import './index.css';
import { Card } from './components/card/Card';
import { Book, MathTest } from './components/card/Calculate';

class App extends React.Component{
    render(){
        return(
            <div className='App'>
                <Card/>
                <Book name="Example Book" year="2022" price="$999" />
                <MathTest />
            </div>
        )
    }
}

export default App;