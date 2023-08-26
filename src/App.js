import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        )
    }
}

export default App;