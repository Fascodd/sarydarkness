import React from 'react';
import './App.css';
import PinkMilk from './videos/Pink Milk _ Speed Paint.mp4'
import PageNav from './components/PageNav'
import Showcase from './components/Showcase'
import Gallery from './components/Gallery'
import InfoPage from './components/InfoPage'
class App extends React.Component {

  constructor() {
    super();
    this.state = {}
    this.EnterSite = this.EnterSite.bind(this)
    this.FadeIn = this.FadeIn.bind(this);
  }
  FadeIn() {
    const ar = [];
    let waitTime = 0;
    ar.push(Array.from(document.getElementsByTagName("header")));
    ar.push(Array.from(document.querySelectorAll(".showcase")));
    ar.push(Array.from(document.querySelectorAll(".filter-selector")));
    ar.push(Array.from(document.querySelectorAll('.gallery-img')));

    const animationTime = 850;

    ar.map(ar => {
   
        ar.map(image => {
          
          image.animate([
            { opacity: 0, transform: 'translateY(200px)' },
            { opacity: 1, transform: 'translateY(0px)' }
          ], {
            duration: animationTime,
            fill: 'forwards',
            delay:`${waitTime}`
          })
        })
        waitTime += animationTime/5;

    })

  }

  EnterSite = () => {
    const enterOverlay = document.getElementById('enter-overlay');
    const animationDuration = 500;
    enterOverlay.animate([
      { opacity: 0, transform: `scale(1)` },
      { opacity: 1, transform: `scale(.75)  ` }
    ], {
      duration: animationDuration,

    })
    setTimeout(() => {
      enterOverlay.style.display = "none";
      this.FadeIn();
    }, animationDuration)
  }
  componentDidMount() {
    this.FadeIn();
  }
  render() {
    // list of filterable gallery catagories

    return (
      <div className="App" >
        {/*} <div id="enter-overlay">
          <div id="overlay-cover"></div>
          <video id="overlay-video" autoPlay={true} loop={true} muted={true} src={PinkMilk}></video>
          <button onClick={this.EnterSite} id="enter-button">Enter</button>
    </div> {*/}
        <div id="container">
          <PageNav />
          <div id="nav-page-wrapper">
            <div id="home-page" className="page">
              <Showcase />
              <Gallery />
            </div>
            <div id="info-page" className="page">
              <InfoPage/>
            </div>
            <div id="request-page" className="page">
              <div id="request-header">
                <h1>This is the request page header</h1>
              </div>
            </div>
          </div>

        </div>
      </div >
    );
  }
}

export default App;
