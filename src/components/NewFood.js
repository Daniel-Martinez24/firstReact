import React from 'react';

function NewFood(props) {
    return (  
        <div className="container-add">
            <p>New Food</p>
            <label htmlFor="file">name</label>
            <input value={props.newName} onChange={props.handleChange} type="text"></input>
            <label htmlFor="file">URL de la imagen</label>
            <input value={props.newImg} onChange={props.handleChange} type="text" ></input>
            <br />
            <button onClick={props.handleAddFood}>Add !</button>
        </div>
    );
}

export default NewFood;