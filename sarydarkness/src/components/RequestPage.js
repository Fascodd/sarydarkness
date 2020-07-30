import React from 'react'
import '../styles/RequestPage.css';
export default class RequestPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            < span >
                <div className="page-container" id="form-container">
                    <div className="box-container" >

                        <form>
                            <div className="contact-wrapper name">
                                <label className="form-label"> First Name </label>
                                <input className="form-input" type="text" >
                                </input>
                            </div>
                            <div className="contact-wrapper name">
                                <label className="form-label"> Last Name </label>
                                <input className="form-input" type="text" >
                                </input>
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
                                <textarea  className="form-input" id="message-input" type="message"></textarea>

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