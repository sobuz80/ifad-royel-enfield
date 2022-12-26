import React from 'react';
import CompanyLogo from '../../../asset/images/partners/client.jpg';
import Carousel from 'react-bootstrap/Carousel';


const PartnerSlider = ({ sendCompanyLogo }) => {
	return (
		<>
			<Carousel>
				<Carousel.Item>
				<img className="d-block w-100" src={CompanyLogo}/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={CompanyLogo} />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={CompanyLogo} />
				</Carousel.Item>
			</Carousel>
			
		</>
	);
};

export default PartnerSlider;
