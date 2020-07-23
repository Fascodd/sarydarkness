import React from 'react'
export default class InfoPage extends React.Component {
    constructor() {
        super();
        this.state = {}

    }
    render() {
        return (
            <div className="page-container">
                <div className="box-container">
                    <div id="self-pic-box" className="half-box" >
                        <div className="pic-container">
                            <div id="self-pic" style={{
                                backgroundImage: 'url("/about_me/sarydarkness.png")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }} />
                        </div>

                    </div>
                    <div id="info-bio" className="half-box" >
                        <div className="box-text-container">
                            <h1 id="box-header"> About Me</h1>
                            <p id="info-txt">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti iure non beatae facere, incidunt ad? Facere, necessitatibus assumenda. Assumenda, velit vel sint nostrum aspernatur temporibus alias illum magni fuga!</p></div>
                    </div>

                </div>
            </div>
        )
    }
}
