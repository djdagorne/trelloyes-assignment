import React from 'react';
import List from './List.js';
import STORE from './STORE.js';
import "./App.css";

function App(props) {//establish the preliminary structure of the HTML doc
  return (
    <main className='App'> 
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {STORE.lists.map((list) =>
            <List //call upon the list component with properties created and supplied by the store object
              key={list.id}
              header={list.header}
              cardIds={list.cardIds.map(id => STORE.allCards[id])}//create an array from 'allCards' using info from 
              //cardIds given in the STORE
            />
        )}
      </div>
    </main>
  );
}

export default App;