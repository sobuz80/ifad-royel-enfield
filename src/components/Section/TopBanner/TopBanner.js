import React, {Component, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import apolloLogo from '../../../asset/images/Apollo-Tyres-Logo-Vector.png';
import slider1 from '../../../asset/images/banner/slider3.png';
import slider2 from '../../../asset/images/banner/Panniers-Promo-banner.png';
import slider3 from '../../../asset/images/banner/slider1.png';

class TopBanner extends Component {

    render() {
        return (
            <Fragment>
                <section id='slider'>
					<Carousel fade pause="true">
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider1} alt="img"/>
							{/* <Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider2} alt="img"/>
							{/* <Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider3} alt="img"/>
							{/* <Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption> */}
						</Carousel.Item>
					</Carousel>

					{/* <img className="apolloLogo" src={apolloLogo} alt="img"/> */}
				</section>
            </Fragment>
        );
    }
}
export default TopBanner;
