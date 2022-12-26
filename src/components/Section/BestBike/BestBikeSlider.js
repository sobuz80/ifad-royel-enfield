import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import BikeOne from '../../../asset/images/bikecategory/1.png';
import BikeTwo from '../../../asset/images/bikecategory/2.png';
import Bikethree from '../../../asset/images/bikecategory/3.png';
import { Link } from 'react-router-dom';
import './Bike.css'

const BestBikeSlider = () => {
	const [lgShow, setLgShow] = useState(false);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>
				{/* {sendVideoData.map((curElem)=>{})} */}

				<div className="p-3 ">
					<Link to="/about_product" className="text-dark">
						<div className="text-center rounded shadow-md bg-body rounded">
							<img src={BikeOne} alt="" className="img-fluid img-align" />
						</div>
					</Link>
				</div>

				<div className="p-3 ">
					<div className="text-center rounded shadow-md bg-body rounded">
						<Link to="/about_product" className="text-dark">
							<img src={BikeTwo} alt="" className="img-fluid img-align" />
						</Link>

					</div>
				</div>

				<div className="p-3 ">
					<div className="text-center rounded shadow-md bg-body rounded">
						<Link to="/about_product" className="text-dark">
							<img src={Bikethree} alt="" className="img-fluid img-align" />
						</Link>

					</div>
				</div>

				<div className="p-3 ">
					<div className="text-center rounded shadow-md bg-body rounded">
						<Link to="/about_product" className="text-dark">
						<img src={BikeTwo} alt="" className="img-fluid img-align" />
						</Link>
					</div>
				</div>
			</Slider>
		</>
	);
};

export default BestBikeSlider;
