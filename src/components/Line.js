import React from 'react';
import Food from './Food';

function Foods(props) {
    return (  
        <div className="line">
            <button 
            onClick={() =>{ props.handleAddCounter(props.food.name)}} 
            >+</button>
            <button
            onClick={() =>{ props.handleQuitCounter(props.food.name)}} 
            >-</button>
            {
                [...Array(props.food.counter)].map((e, i) => 
                    <Food
                    img = {props.food.img}
                    name = {props.food.name}
                    key={i} />
                )
            }
        </div>

    );
}

export default Foods;