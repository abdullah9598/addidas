import React from 'react'
import './header.css'
import LandingPageShoe from '../../assets/LandingPageShoe.png'

function Header() {
    return (
        <div className='header'>
            <div className="header_content">
                <div className="header_content-heading">
                    <h1>SNEAKER</h1>
                    <h2> AIR JORDAN</h2>
                </div>

                <div className="header_content-title">
                    <h3>AIR JORDAN 1 MID LIGHT SMOKE GREY</h3>
                </div>

                <div className="header_content-paragraph">
                    <p>The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways
                        over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes
                        the original AJ1s are already part of sneaker AIR JORDAN 1 MID LIGHT SMOKE GREY. This is proof of being truely iconic, isn’t it?</p>
                </div>

                <div className="header_content-details">
                    <p>SKU: 554724-073 EU40.5-EU47
                        SKU: 554725-073 (GS) EU36-EU40
                        Release date: October 2020
                    </p>
                </div>
            </div>

            <div className="header_iamge">
                <div className="header_image-jordan">
                    <img src={LandingPageShoe} alt="jordan1" />
                </div>
            </div>
        </div>
    )
}

export default Header