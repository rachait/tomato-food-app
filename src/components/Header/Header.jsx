import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Delicious Food Delivered to Your Door</h2>
                <p>Discover a world of culinary excellence with our carefully curated menu. From traditional favorites to innovative creations, every dish is crafted with premium ingredients and delivered fresh to your doorstep.</p>
                <button className="btn btn-primary">Explore Menu</button>
            </div>
        </div>
    )
}

export default Header
