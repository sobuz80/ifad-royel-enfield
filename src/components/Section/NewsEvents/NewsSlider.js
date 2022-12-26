import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from '../../../asset/images/news/newsImg.png';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go';
import { SlCalender } from "react-icons/sl";
import Slider from 'react-slick';

const NewsSlider = ({ sendCardData }) => {
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
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					dots: false,	
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div>
				<Slider {...settings}>
					{sendCardData.map((curElem) => {
						return (
							<>
								<div className="mb-4 p-3">
									<Card>
										<div className="shape">
											<Card.Img variant="top" src={Img}/>
										</div>
										<Card.Body>
											{/* <Card.Title>Card Title</Card.Title> */}
											<Card.Text className="fs-18 fw-semibold">{curElem.text}</Card.Text>
											<div className="d-flex justify-content-between">
											<Link to="#" className='newsDetails'>
													Read More<GoChevronRight/>
												</Link>
												<p className="m-0 newsDate">
													06 Nov, 2022 <SlCalender className='fs-14 ms-2'/>
												</p>
											</div>
										</Card.Body>
									</Card>
								</div>
							</>
						);
					})}
				</Slider>
				<div className="text-center">
					<Link to="#" className='moreBtn'>
						Load More <BsArrowRight className='ps-1 fs-20'/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NewsSlider;
