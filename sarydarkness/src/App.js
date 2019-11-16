import React from 'react';
import './App.css';
import PinkMilk from './videos/Pink Milk _ Speed Paint.mp4'
import PageNav from './components/PageNav'
import Showcase from './components/Showcase'
import Gallery from './components/Gallery'
class App extends React.Component {

  constructor() {
    super();
    this.state = {}
    this.EnterSite = this.EnterSite.bind(this)
  }
  EnterSite = () => {
    const enterOverlay = document.getElementById('enter-overlay');
    const animationDuration = 1000;
    enterOverlay.animate([
      { opacity: 1, transform: `scale(1) translateX(0px) ` },
      { opacity: 0, transform: `scale(.75) translateX(100%) ` }
    ], {
      duration: animationDuration
    })
    setTimeout(() => enterOverlay.style.display = "none", animationDuration)
  }
  render() {
    // list of filterable gallery catagories

    return (
      <div className="App">
        <div id="enter-overlay">
          <div id="overlay-cover"></div>
          <video id="overlay-video" autoPlay={true} loop={true} muted={true} src={PinkMilk}></video>
          <button onClick={this.EnterSite} id="enter-button">Enter</button>
        </div>
        <div id="container">
          <PageNav />
          <Showcase />
          <Gallery />
        </div>

      </div >
    );
  }
}

export default App;
