import React from 'react';
import './App.css';

import Title from './components/title';
import ChangeColor from './components/changeColor';
import NewFood from './components/NewFood';
import Foods from './components/Foods';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.state = {
      color: 'red',
      listColors: ['yellow', 'red', 'blue', 'green'],
      foods: {
          burger: {
            img: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg',
            name: 'burger',
            cantidad: 3
          },
          pizza: {
            img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso.jpg',
            name: 'pizza',
            cantidad: 2
          }
      },
      newFood:{
        img: '',
        name: '',
        cantidad: 1
      }
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
      <div style={{backgroundColor: this.state.color}} >
        <Title />

        <div className="container" >
          <div className="left" >

            <ChangeColor handleChangeColor ={this.handleChangeColor} />

            <NewFood />
            <div className="container-add">
              <p>New Food</p>
              <label for="file">name</label>
              <input type="text"></input>
              <label for="file">Choose a file</label>
              <input type="file" value="" style={{ maxWidth: '70%'}}  accept=".png, .jpg" ></input>
              <br />
              <button>Add !</button>
            </div>
          </div>

          <Foods />
        </div>

      </div>
    );

  }
}
export default App;
