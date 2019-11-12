import React from 'react';
import './App.css';
import showcase_img from './pics/showcase_img'
import gallery_img from './pics/gallery_img'
import video3 from './videos/Pink Milk _ Speed Paint.mp4'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video3: video3,
      gallery_img,
      itemList: [
        { id: 1, text: "One" },
        { id: 2, text: "Two" },
        { id: 3, text: "Three" }],
      navList: ["Catagory 1", "Catagory 2", "Catagory 3"],
      catList: [
        { id: 0, catagory: "all", name: "All", classes: "catagory filter-item  active-cat", selected: true },
        { id: 1, catagory: "joker", name: "Joker", classes: "catagory filter-item ", selected: false },
        { id: 2, catagory: "study", name: "Study", classes: "catagory filter-item", selected: false },
        { id: 3, catagory: "neon_demon", name: "Neon Demon", classes: "catagory filter-item", selected: false },
      ]
    }

    this.Fade = this.Fade.bind(this);
    this.OnCatagoryClick = this.OnCatagoryClick.bind(this);

  }
  Fade = () => {
  }
  OnCatagoryClick = (e) => {
    let selectedCat = this.state.catList.filter(obj => e.target.id === obj.id.toString())[0]
    // Changes selected catagory style
    if (e.target.tagName === "LI") {
      let CatagoryItemChange = () => {


        this.setState(prevstate => ({
          catList: prevstate.catList.map(
            obj =>
              obj.id === selectedCat.id ?
                { ...obj, classes: "catagory filter-item active-cat", selected: true } :
                { ...obj, classes: "catagory filter-item", selected: false }
          )
        }))
      };
      let FilterGalleryImages = () => {
        this.setState(prevstate => ({
          gallery_img: prevstate.gallery_img.map(obj =>
            selectedCat.catagory === "all" ? { ...obj, display: "block" } :
              obj.catagory === selectedCat.catagory ? { ...obj, display: "block" } : { ...obj, display: "none" }
          )
        }))
      }
      let SetStateOfImages = () => {
        this.setState(prevstate => ({
          gallery_img: prevstate.gallery_img.map((obj, index) => {
            const prevPosX = Array.from(document.querySelectorAll('.gallery-img'))[index].getBoundingClientRect().x
            const prevPosY = Array.from(document.querySelectorAll('.gallery-img'))[index].getBoundingClientRect().y
            const prevDisplay = Array.from(document.querySelectorAll('.gallery-img'))[index].style.display;
            return { ...obj, xPos: prevPosX, yPos: prevPosY, prevDisplay: prevDisplay }
          }
          )
        }))
      }


      CatagoryItemChange();
      FilterGalleryImages();
      SetStateOfImages();

    };

  }
  componentDidMount = () => {

    this.setState(prevstate => ({
      gallery_img: prevstate.gallery_img.map((obj, index) => {
        const prevPosX = Array.from(document.querySelectorAll('.gallery-img'))[index].getBoundingClientRect().x
        const prevPosY = Array.from(document.querySelectorAll('.gallery-img'))[index].getBoundingClientRect().y

        return { ...obj, xPos: prevPosX, yPos: prevPosY }
      }
      )
    }))
  }
  componentDidUpdate() {
    console.clear();

    Array.from(document.querySelectorAll('.gallery-img')).map((image, index) => {
      const currImagePosX = image.getBoundingClientRect().x;
      const currImagePosY = image.getBoundingClientRect().y;
      const prevImageState = this.state.gallery_img[index];
      const prevImgagePosX = prevImageState.xPos;
      const prevImgagePosY = prevImageState.yPos;

      // for images that are displayed and will not move
      if (image.style.display === "block") {

        if (prevImageState.prevDisplay === "block") {
          // image prevDisplay was "block" and currDisplay is "block"

          image.animate([
            { transform: `translateX(${prevImgagePosX - currImagePosX}px) translateY(${prevImgagePosY - currImagePosY}px)` },
            { transform: `translateX(${0}px) translateY(${0}px)` }
          ], {
            delay: 0,
            duration: 500,
            fill: "forwards"
          })
        }
        if (prevImageState.prevDisplay === "none") {
          // if image goes from "none" to "block"

          image.animate([
            { opacity: 0, transform: "scale(0)" },
            { opacity: 1, transform: "scale(1)" }
          ], {
            duration: 500,
            delay: 500,
            fill: "forwards"
          })
        }
      }
      else if (image.style.display === "none") {
        if (currImagePosX - prevImgagePosX === 0 && currImagePosY - prevImgagePosY === 0) {
          // image is "none" and did not move
        }

        if (prevImageState.prevDisplay === "block") {
          //image went from "block" to "none"
        
          image.animate([
            { opacity: 0, transform: `scale(0) translateX(${currImagePosX}px) translateY(${currImagePosX}px) ` },
            { opacity: 1, transform: `scale(1) translateX(${currImagePosX}px) translateY(${currImagePosX}px)` }
          ], {
            duration: 500,
            delay: 0,
            direction: "reverse",
            fill: "forwards"
          })
          setTimeout(() => image.style.display = "none", 500)



        }
      }

    })
  }
  render() {
    // list of filterable gallery catagories
    let catagories = this.state.catList.map(obj =>
      <li catagory={obj.catagory} key={obj.id} id={obj.id} className={obj.classes}>{obj.name}</li>
    )
    return (
      <div className="App">
        <div id="container">
          <header>
            <div id="signature">
              <img src="#" alt="#"></img>
            </div>
            <ul>
              <li className="catagory header-nav-item">Home </li>
              <li className="catagory header-nav-item">Info</li>
              <li className="catagory header-nav-item">Request</li>
            </ul>
          </header>

          <div className="showcase">
            {showcase_img.map(image =>
              <div className="showcase-img" key={image.id} style={{ backgroundImage: `url(${image.src})` }}></div>)
            }

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
            {this.state.gallery_img.map(image =>
              <div className="gallery-img" key={image.id}
                style={{ position: "relative", display: image.display, backgroundImage: `url(${image.src})` }} >
              </div>
            )}
          </div>

        </div>
      </div >
    );
  }
}

export default App;
