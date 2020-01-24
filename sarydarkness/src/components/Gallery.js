import React from 'react'
import gallery_img from '../pics/gallery_img'
export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            gallery_img,
            catList: [
                { id: 0, catagory: "all", name: "All", classes: "catagory filter-item  active-cat", selected: true },
                { id: 1, catagory: "joker", name: "Joker", classes: "catagory filter-item ", selected: false },
                { id: 2, catagory: "study", name: "Study", classes: "catagory filter-item", selected: false },
                { id: 3, catagory: "neon_demon", name: "Neon Demon", classes: "catagory filter-item", selected: false }
            ],
            FitlerImages: false,
        }
        this.OnCatagoryClick = this.OnCatagoryClick.bind(this);
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
            this.setState({ FitlerImages: true });
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
        if (this.state.FitlerImages) {
            Array.from(document.querySelectorAll('.gallery-img')).map((image, index) => {
                const currImagePosX = image.getBoundingClientRect().x;
                const currImagePosY = image.getBoundingClientRect().y;
                const prevImageState = this.state.gallery_img[index];
                const prevImgagePosX = prevImageState.xPos;
                const prevImgagePosY = prevImageState.yPos;
<<<<<<< Updated upstream
                const durationOfAnimation = 300;
=======
                const durationOfAnimation = 250;
                let navbarHeight = document.getElementsByTagName("header")[0].getBoundingClientRect().height;
>>>>>>> Stashed changes

                // for images that are displayed and will not move
                if (image.style.display === "block") {

                    if (prevImageState.prevDisplay === "block") {
                        // image prevDisplay was "block" and currDisplay is "block"

                        image.animate([
                            { transform: `translateX(${prevImgagePosX - currImagePosX}px) translateY(${prevImgagePosY - currImagePosY}px)` },
                            { transform: `translateX(${0}px) translateY(${0}px)` }
                        ], {
                            delay: 0,
                            duration: durationOfAnimation,
                            fill: "forwards"
                        })
                    }
                    if (prevImageState.prevDisplay === "none") {
                        // if image goes from "none" to "block"

                        image.animate([
                            { opacity: 0, transform: "scale(0)" },
                            { opacity: 1, transform: "scale(1)" }
                        ], {
                            duration: durationOfAnimation,
                            delay: durationOfAnimation,
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

                        //Gets image out of the way for the other animations and positions image "absolute" by previous offset
                        // Then allows for animation of scale(1) to scale(0)
                        image.style.display = "block";
                        image.style.position = "absolute";
                        image.style.left = `${prevImgagePosX - parseInt(window.getComputedStyle(image).marginLeft)}px`;
                        image.style.top = `${prevImgagePosY - parseInt(window.getComputedStyle(image).marginTop)}px`;

                        image.animate([
                            { opacity: 0, transform: `scale(0) translateX(${currImagePosX}px) translateY(${currImagePosX}px) ` },
                            { opacity: 1, transform: `scale(1) translateX(${currImagePosX}px) translateY(${currImagePosX}px)` }
                        ], {
                            duration: durationOfAnimation,
                            delay: 0,
                            direction: "reverse",
                            fill: "forwards"
                        })
                        setTimeout(() => {
                            image.style.position = "relative";
                            image.style.left = `${0}px`;
                            image.style.top = `${0}px`;
                            image.style.display = "none";

                        }, durationOfAnimation);
                    }
                }
                // To avoid " Expected to return a value in arrow function  array-callback-return"
                this.setState({ FitlerImages: false });
                return null
            })
        }
    }
    render() {
        return (
            <div id="gallery-wrapper">
                <div className="filter-selector">
                    <ul onClick={this.OnCatagoryClick}>
                        {this.state.catList.map(obj =>
                            <li catagory={obj.catagory} key={obj.id} id={obj.id} className={obj.classes}>{obj.name}</li>
                        )}
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
        )
    }
}