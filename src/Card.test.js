import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';


describe('Card component', () => {
    it('render without crashing', () => {
        ReactDOM.render(<Card />, document.createElement('div'));
        ReactDOM.unmountComponentAtNode(document.createElement('div'));
    });
    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
          .create(<Card />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });
 

});
