import React from 'react';
import List from './List.js';
import store from './STORE.js';
import "./App.css";

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
              cardIds={list.cardIds.map(id => store.allCards[id])}
            />
        )}
      </div>
    </main>
  );
}

export default App;