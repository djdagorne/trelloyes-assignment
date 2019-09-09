import React from 'react';
import Card from './Card.js';
import './List.css';

export default function List(props) {
    return (
        <section className="List">
            <header className="List-header"> {/* create new lists filled with data from the Card component */}
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cardIds.map((card) => 
                    <Card 
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />//establish the card properties and where they will find their data
                )}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
      </section>
    )
}