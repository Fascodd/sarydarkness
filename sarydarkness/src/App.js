import React from 'react';
import './App.css';
import video1 from './videos/Cyborg _ Speed Paint.mp4'
import video2 from './videos/Neon Demon.mp4'
import video3 from './videos/Pink Milk _ Speed Paint.mp4'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video1: video1,
      video2: video2,
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
    let enterContainer = document.getElementById("enter-container")
    let mainBody = document.getElementById("main-body");
    enterContainer.classList.add('inactive');
    mainBody.classList.add('active')

    setTimeout(() => { enterContainer.style.display = "none" }, 500)
  }

  render() {
    return (
      <div className="App">
        <div className="container-area">
          <div className='video-container'>
            <video className='bg-video' loop muted autoPlay >
              <source src={this.state.video3} type="video/webm" />
              <source src={this.state.video3} type="video/mp4" />
              <source src={this.state.video3} type="video/ogg" />
            </video>
            <div className="fullscreen-video-wrap"></div>
          </div>
          <div id="enter-container" >
            <button className="enter-button " onClick={this.Fade}>Enter</button>
          </div>
          <div id="main-body">
            <header className="header-area">
              <ul className="header-list">
                {this.state.itemList.map(item => {
                  return <li className="header-item list-item" key={item.key}>{`${item.text}`}</li>
                })}
              </ul>
            </header>
            <div className="left-navbar">
              <ul className="left-navlist">
                <li className="list-item">Catagory1</li>
                <li className="list-item">Catagory2</li>
                <li className="list-item">Catagory3</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
