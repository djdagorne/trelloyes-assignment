import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './STORE.js';
import List from './List.js';


describe('List component', () => {
    it('render without crashing', () => {
        ReactDOM.render(STORE.lists.map((list) =>
                            <List //call upon the list component with properties created and supplied by the store object
                            key={list.id}
                            header={list.header}
                            cardIds={list.cardIds.map(id => STORE.allCards[id])}//create an array from 'allCards' using info from 
                            //cardIds given in the STORE
                            />
        ), document.createElement('div')); 
        ReactDOM.unmountComponentAtNode(document.createElement('div'));
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(STORE.lists.map((list) =>
                    <List //call upon the list component with properties created and supplied by the store object
                    key={list.id}
                    header={list.header}
                    cardIds={list.cardIds.map(id => STORE.allCards[id])}//create an array from 'allCards' using info from 
                    //cardIds given in the STORE
                    />
            ))
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});