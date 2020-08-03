import React from 'react'
import '../styles/RequestPage.css';
import gallery_img from '../pics/gallery_img'
export default class RequestPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const requestPageCollage = gallery_img;
        for (let i = 1; i <= 8; i++) {
            const randomNum = Math.floor(Math.random() * (requestPageCollage.length ) );
            const randomImgSrc = requestPageCollage[randomNum].src;
            document.getElementById(`image${i}`).style.backgroundImage = `url(${randomImgSrc})`;
            requestPageCollage.splice(randomNum, 1)
        }
    }
    render() {
        return (
            < span >
                <div className="page-container" id="request-page-container">
                    <div id="art-display-container">
                        <div id="art-display-container1">
                            <div className="art-display-image" id="image1"></div>
                            <div className="art-display-image" id="image2"></div>
                            <div className="art-display-image" id="image3"></div>
                            <div className="art-display-image" id="image4"></div></div>
                        <div id="art-display-container2">
                            <div className="art-display-image" id="image5"></div>
                            <div className="art-display-image" id="image6"></div>
                            <div className="art-display-image" id="image7"></div>
                            <div className="art-display-image" id="image8"></div></div>
                    </div>
                    <div className="box-container" id="form-container" >
                        <form>
                            <div className="contact-wrapper">
                                <div className=" name" id="first-name">
                                    <input className="form-input" type="text" autoComplete="off" required={true}></input>
                                    <label className="form-label">
                                        <span className="content-name">  First Name </span>
                                    </label>
                                </div>
                                <div className=" name" id="last-name">
                                    <input className="form-input" type="text" required={true} ></input>
                                    <label className="form-label">
                                        <span className="content-name"> Last Name</span>
                                    </label>
                                </div>
                            </div>
                            <div className="contact-wrapper" id="email-wrapper">
                                <input className="form-input" id="email-input" type="text" required={true}></input>
                                <label className="form-label">
                                    <span className="content-name">Email </span>
                                </label>
                            </div>
                            <div className="contact-wrapper" id="subject-wrapper">
                                <input className="form-input" id="subject-input" type="text" required={true} ></input>
                                <label className="form-label">
                                    <span className="content-name"> Subject </span>
                                </label>
                            </div>
                            <div className="contact-wrapper" id="message-wrapper">
                                <label className="form-label">
                                    <span className="content-name"> Message </span>
                                </label>
                                <textarea className="form-input" id="message-input" type="message"></textarea>
                            </div>
                            <div className="contact-wrapper" id="button-wrapper">
                                <button> Submit </button>
                            </div>
                        </form>

                    </div>
                </div>
            </span >
        )
    }
}