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
      foods: [
          {
            img: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg',
            name: 'burger',
            counter: 3
          },
          {
            img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso.jpg',
            name: 'pizza',
            counter: 2
          }
        ],
      newFood: {
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

  handleAddCounter = (e) =>{
    console.log(e);
    const foods = this.state.foods.slice();
    const newFoods = foods.map((food) => {
      if (food.name === e) {
       food.counter++;
     }
     return food;
    }
     
    )
    this.setState({
      foods: newFoods
    })
  }

  handleQuitCounter = (e) =>{
    console.log(e);
    const foods = this.state.foods.slice();
    const newFoods = foods.map((food) => {
      if (food.name === e && food.counter > 1) {
       food.counter--;
     }
     return food;
    }
     
    )
    this.setState({
      foods: newFoods
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
          </div>

          <Foods 
          foods={this.state.foods} 
          handleAddCounter={this.handleAddCounter} 
          handleQuitCounter = {this.handleQuitCounter}
          />
        </div>

      </div>
    );

  }
}
export default App;
