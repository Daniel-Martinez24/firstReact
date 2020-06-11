import React from 'react';

function Food(props) {
    return (  
        <div className="food">
            <p>{props.name}</p>
            <img src={props.img} alt={props.name} />
        </div>

    );
}

export default Food;