import React from 'react';
import './App.css';
import joker_pic from './pics/joker_2019.png'
import pink_milk from './pics/pink_milk.PNG'
import neon_demon from './pics/neon_demon.PNG'
import video3 from './videos/Pink Milk _ Speed Paint.mp4'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokerPic: joker_pic,
      pinkMilk: pink_milk,
      neon_demon,
      video3: video3,
      itemList: [
        { id: 1, text: "One" },
        { id: 2, text: "Two" },
        { id: 3, text: "Three" }],
      navList: ["Catagory 1", "Catagory 2", "Catagory 3"],
      catList: [
        { id: 1, name: "Catagory1", classes: "catagory filter-item active-cat", selected: true },
        { id: 2, name: "Catagory2", classes: "catagory filter-item", selected: false },
        { id: 3, name: "Catagory3", classes: "catagory filter-item", selected: false },
        { id: 4, name: "Catagory4", classes: "catagory filter-item", selected: false }]
    }

    this.Fade = this.Fade.bind(this);
    this.OnCatagoryClick = this.OnCatagoryClick.bind(this);
  }
  Fade = () => {
  }
  OnCatagoryClick = (e) => {
    // Changes selected catagory style
    let CatagoryItemChange = () => {
      if (e.target.tagName == "LI") {
        let selectedCat = this.state.catList.filter(obj => e.target.id == obj.id)
        this.setState(prevstate => ({
          catList: prevstate.catList.map(
            obj =>
              obj.id == selectedCat[0].id ? { ...obj, classes: "catagory filter-item active-cat", selected: true } :
                { ...obj, classes: "catagory filter-item", selected: false }
          )
        }))
      }
    };

    CatagoryItemChange();
  }
  render() {
    // list of filterable gallery catagories
    let catagories = this.state.catList.map(obj => <li key={obj.id} id={obj.id} className={obj.classes}>{obj.name}</li>
    )

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
            <div className="showcase-img" style={{ backgroundImage: `url(${this.state.jokerPic})` }} ></div>
            <div className="showcase-img" style={{ backgroundImage: `url(${this.state.pinkMilk})` }} ></div>
            <div className="showcase-img" style={{ backgroundImage: `url(${this.state.neon_demon})` }} ></div>
            <div className="showcase-text-wrapper">
              <h1 className="showcase-header">Lorem ipsum, dolor sit amet consectetur</h1>
              <p className="showcase-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam nemo minus doloribus quod enim totam eligendi laudantium
                 quibusdam ea sapiente nulla quisquam aliquam, inventore accusantium
               odio quos accusamus hic! Molestias!</p>
            </div>
          </div>
          <div className="filter-selector">
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content">
              </div>
            </div>
            <ul onClick={this.OnCatagoryClick}>
              {catagories}
            </ul>

          </div>
          <div className="gallery">

          </div>

        </div>
      </div>
    );
  }
}

export default App;
