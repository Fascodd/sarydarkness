import React from 'react'
import showcase_img from '../pics/showcase_img'

export default class Showcase extends React.Component {
    render() {
        return (

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
        )
    }
}