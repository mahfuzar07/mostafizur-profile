import React from 'react';
import { navMenu } from './../data';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<div>
			<div className="navbar">
				<div className="container">
					<div className="navbar-wrapper">
						<ul>
							{navMenu.map((item, index) => (
								<li key={index}>
									<Link to={item.src}>
										<a>{item.name}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
