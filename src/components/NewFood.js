import React from 'react';

function NewFood(props) {
    return (  
        <div className="container-add">
            <p>New Food</p>
            <label for="file">name</label>
            <input type="text"></input>
            <label for="file">Choose a file</label>
            <input type="file" value="" style={{ maxWidth: '70%'}}  accept=".png, .jpg" ></input>
            <br />
            <button>Add !</button>
        </div>
    );
}

export default NewFood;