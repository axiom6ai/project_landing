import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/common/TextInput';
import TogetherButton from './components/common/TogetherButton';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div><TextInput placeholder="input to test collaboration"/></div>
                <div><TogetherButton/></div>
            </div>
        );
    }
}

export default App;
