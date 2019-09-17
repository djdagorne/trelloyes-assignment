import React from 'react';
import './App.css';
import List from './List.js';

function App(props) {
  return (
    <main className='App'>
      {props.children}
    </main>
  );
}

export default App;