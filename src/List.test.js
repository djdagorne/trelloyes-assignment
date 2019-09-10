import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';
import STORE from './STORE.js';
import List from './List.js';


describe('List component', () => {
    it('render without crashing', () => {
        ReactDOM.render(<List 
            key={STORE.lists.id}
            header={STORE.lists.header}
            cardIds={STORE.lists.cardIds.map(id => STORE.allCards[id])}
                />, document.createElement('section'));
        ReactDOM.unmountComponentAtNode(<List/>,document.createElement('section'));
    });

    
});