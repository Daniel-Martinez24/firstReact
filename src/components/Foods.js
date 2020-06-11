import React from 'react';
import Line from './Line';

function Foods(props) {
    return (  
        <div className="container-food">
        {props.foods.map((food, id) => 
            <Line
            key={id}
            id = {id}
            food={food}
            handleAddCounter = {props.handleAddCounter}
            handleQuitCounter = {props.handleQuitCounter}
            /> 
        )}
         
        </div>
    );
}

export default Foods;