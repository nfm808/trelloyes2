import React, { Component } from 'react';
import './App.css';
import List from './components/list.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        
      </main>
    );
  }
}

export default App;
