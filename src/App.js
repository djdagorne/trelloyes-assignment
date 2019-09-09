import React from 'react';
import List from './List.js';
import './store.js';
import storeObject from './store.js';

function App(props) {
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.lists.map((list) =>
            <List 
              key={list.id}
              header={list.header}
              cards={list.allCards.map(id => props.allCards[id])}
            />
        )}
      </div>
    </main>
  );
}

export default App;