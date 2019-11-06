import React from 'react';
import './App.css';
import joker_pic from './pics/joker_2019.png'
import pink_milk from './pics/pink_milk.PNG'
import video3 from './videos/Pink Milk _ Speed Paint.mp4'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokerPic:joker_pic,
      pinkMilk:pink_milk,
      video3: video3,
      itemList: [
        { key: 1, text: "One" },
        { key: 2, text: "Two" },
        { key: 3, text: "Three" }],
      navList: ["Catagory 1", "Catagory 2", "Catagory 3"]

    }
    this.Fade = this.Fade.bind(this);

  }
  Fade = () => {
  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <header>
            <div id="signature">
              <img src="#"></img>
            </div>
            <ul>
              <li className="catagory header-nav-item">Home </li>
              <li className="catagory header-nav-item">Info</li>
              <li className="catagory header-nav-item">Request</li>
            </ul>
          </header>

          <div className="showcase">
            <div style={{backgroundImage:`url(${this.state.jokerPic})`}} ></div>
            <div></div>
            <div></div>
          </div>
          <div className="filter-selector">
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content">
              </div>
            </div>
            <ul>
              <li className="catagory filter-item">Catagory1</li>
              <li className="catagory filter-item">Catagory2</li>
              <li className="catagory filter-item">Catagory3</li>
              <li className="catagory filter-item">Catagory4</li>
            </ul>

          </div>
          <div className="gallery">
            <img src="#"></img>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
