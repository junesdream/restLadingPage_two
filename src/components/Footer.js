import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
		<div className="footerContainer">
			<div className="footerColumn">
				<h4>Social Media</h4>
				<div>Facebook</div>
				<div>Instagram</div>
				<div>Kakaotalk</div>
				<div>LinkedIn</div>
			</div>
			<div className="footerColumn">
				<h4>About</h4>
				<div>Contact us</div>
				<div>Careers</div>
			</div>
			<div className="footerColumn">
				<h4>Location</h4>
				<div>Berlin</div>
				<div>Paris</div>
			</div>
		</div>
	);
}

export default Footer