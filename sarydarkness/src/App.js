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
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
