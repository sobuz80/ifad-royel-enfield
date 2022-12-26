import React, { useState } from 'react';
import BestBikeSlider from './BestBikeSlider';
import './Bike.css'

const BestBike = () => {
	const [key, setKey] = useState('home');
	return (
		<>
			<section id='arrow' className="best_bike mt-5">
				<h2 className="text-center fw-bold font-oswald font-36">Find the best Tyres</h2>
				<p className="text-center font-16 font-lato">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					<br />
					The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
				</p>
				<div className="container">
					<div className="row">
						<div className="product_gallery mb-5">
							<BestBikeSlider />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BestBike;
