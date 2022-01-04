import React from 'react'
import './Favorite.css'
import Slide from "react-reveal/Reveal";
import cake7 from '../assets/cake7.jpg'

const Favorite = () => {
    return (
		<div className="favContainer">
			<h2> Our favorite</h2>

			<div className="favContent">
				<Slide left>
					<img src={cake7} alt="favImg" className="favImage" />{" "}
				</Slide>
				<Slide right>
			
					<div className="textContent">
						<p>
							Our specialty couple cake with coffee for dessert
							with a loving moment for both of them. This is like
							a greatest shot taste, just grab it!
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn">Order Now </button>
		</div>
	);
}

export default Favorite
