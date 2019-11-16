import React from 'react'

export default class PageNav extends React.Component {
    constructor() {
        super();
        this.state = {
            Pages:
                [{ id: 1, text: "Home", classes: "catagory filter-item active-cat" },
                { id: 2, text: "Info", classes: "catagory filter-item " },
                { id: 3, text: "Request", classes: "catagory filter-item " }]
        }
        this.PageNav = this.PageNav.bind(this);
    }
    PageNav = (e) => {
        let selectedPage = this.state.Pages.filter(obj => e.target.id === obj.id.toString())[0]
        if (e.target.tagName === "LI") {
            this.setState(prevstate => ({
                Pages: prevstate.Pages.map(
                    obj =>
                        obj.id === selectedPage.id ?
                            { ...obj, classes: "catagory filter-item active-cat" } :
                            { ...obj, classes: "catagory filter-item" }
                )
            }))
        }
    }
    render() {
        return (
            <header>
                <div id="signature">
                    <img src="#" alt="#"></img>
                </div>
                <ul onClick={this.PageNav}>
                    {this.state.Pages.map(item =>
                        <li key={item.id} id={item.id} className={item.classes}>{item.text}</li>)}
                </ul>
            </header>
        )
    }
}