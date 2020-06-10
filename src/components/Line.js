import React from 'react';
import Food from './Food';

function Foods(props) {
    return (  
        <div className="line">
            <button>+</button>
            <button>-</button>
            <Food/>
        </div>

    );
}

export default Foods;