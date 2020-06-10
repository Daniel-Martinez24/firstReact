import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.state = {
      color: 'red',
      listColors: ['yellow', 'red', 'blue', 'green']
    }
  }

  handleChangeColor = () => {
    let listColors = this.state.listColors.slice();
    const random = Math.floor(Math.random()*(listColors.length));
    const newColor = listColors.splice(random, 1);
    this.setState({
      color: newColor
    })
  }

  render ()  {
    return (
      <div className="container" style={{backgroundColor: this.state.color}} >
        <p>{this.state.listColors}</p>
        <h1>Menu</h1>
        <div className="Coninar-change" >
          <p> Change Color </p>
          <button onClick={this.handleChangeColor} >
            Random Color
          </button>
        </div>
        <div className="container-add">
          <p>Name</p>
          <input type="file" ></input>
        </div>

      </div>
    );

  }
}
export default App;
