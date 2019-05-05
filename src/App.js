import React, { Component } from "react";
import Games from "./thrones.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Games of Thrones </h1>
        {Games.map(itemx => {
          return (
            <div>
              <h1>{`Season ${itemx.season}`}</h1>
              <h2>{itemx.name}</h2>
              {itemx.image !== null && <img src={itemx.image.medium} />}
              <div>{itemx.summary}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
