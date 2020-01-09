import React from 'react'

export default class PageNav extends React.Component {
    constructor() {
        super();
        this.state = {
            Pages:
                [{ id: 1, text: "Home", classes: "catagory filter-item active-cat", left: 0 },
                { id: 2, text: "Info", classes: "catagory filter-item ", left: 100 },
                { id: 3, text: "Request", classes: "catagory filter-item ", left: 200 }]
        }
        this.PageNav = this.PageNav.bind(this);
    }
    PageNav = (e) => {
        // additional  funtionality to each target "e"
        //Using id of each button (li), shift left by the difference between the id-value*100
        // example: moving from Home(1) to Request(3) would be left:[100-300]% = -200%
        // moving from Request(3) to Info(2) would be left:[300%-200%] = 100%
        let selectedPage = this.state.Pages.filter(obj => e.target.id === obj.id.toString())[0]
        if (e.target.tagName === "LI") {
            //testing**
            const navPageWrapper = document.getElementById("nav-page-wrapper");
            navPageWrapper.style.transform =`translateX(${100-selectedPage.id*100}%)`
            //
            this.setState(prevstate => ({
                Pages: prevstate.Pages.map(
                    obj =>
                        obj.id === selectedPage.id ?
                            { ...obj, classes: "catagory filter-item active-cat" } :
                            { ...obj, classes: "catagory filter-item" }
                )
            }))
        }
        const Pages = document.querySelectorAll(".page")
        Pages.forEach((page, index) => {
            page.style.left = `${this.state.Pages[index].left}%`
        })
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