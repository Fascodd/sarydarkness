import React from 'react'
import '../styles/RequestPage.css';
export default class RequestPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const artDisplayContainer = document.getElementById("art-display-container");


    }
    render() {
        return (
            < span >
                <div className="page-container" id="request-page-container">
                    <div id="art-display-cotnainer">
                        <div className="art-display-image" id="image1"></div>
                        <div className="art-display-image" id="image2"></div>
                        <div className="art-display-image" id="image3"></div>
                        <div className="art-display-image" id="image4"></div>
                        <div className="art-display-image" id="image5"></div>
                        <div className="art-display-image" id="image6"></div>
                        <div className="art-display-image" id="image7"></div>
                        <div className="art-display-image" id="image8"></div>
                    </div>
                    <div className="box-container" id="form-container" >
                        <form>
                            <div className="contact-wrapper">
                                <div className=" name" id="first-name">
                                    <label className="form-label"> First Name </label>
                                    <input className="form-input" type="text" ></input>
                                </div>
                                <div className=" name" id="last-name">
                                    <label className="form-label"> Last Name </label>
                                    <input className="form-input" type="text" ></input>
                                </div>
                            </div>
                            <div className="contact-wrapper" id="email-wrapper">
                                <label className="form-label"> Email </label>
                                <input className="form-input" id="email-input" type="text" >
                                </input>
                            </div>
                            <div className="contact-wrapper" id="subject-wrapper">
                                <label className="form-label"> Subject </label>
                                <input className="form-input" id="subject-input" type="text" >
                                </input>
                            </div>
                            <div className="contact-wrapper" id="message-wrapper">
                                <label className="form-label"> Message </label>
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