import React from 'react';
import List from './List.js';
import './store.js';
import storeObject from './store.js';

function App(props) {
  return (
    <main className='App'>{/* <section <header/>, <list <card>> <newcardbutton>> */}
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map((list) =>
            <List 
              key={list.id}
              header={list.header}
              cards={list.allCards.map(id => store.allCards[id])}
            />
        )}
      </div>
    </main>
  );
}

export default App;