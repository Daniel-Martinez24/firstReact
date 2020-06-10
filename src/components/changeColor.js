import React from 'react';

function ChangeColor(props) {
    return (  
      <div className="container-change" >
        <p> Change Color </p>
        <button onClick={props.handleChangeColor} >
          Random Color
        </button>
      </div>
    );
}

export default ChangeColor;