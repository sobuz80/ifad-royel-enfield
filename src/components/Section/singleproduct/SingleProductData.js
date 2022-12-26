import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

const SingleProduct = () => {
	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	];

	return (
		<>
			<section className="about_content">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mt-5">
							<ImageGallery items={images} />;
						</div>
						<div className="col-lg-6 mt-5">
							<div className="">
								<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
									<Tab eventKey="profile" title={<span className="font-oswald fs-20">Over View</span>}>
										<p className="">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
											industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
											scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
											electronic typesetting, remaining essentially unchanged.
										</p>
									</Tab>
									<Tab eventKey="contact" title={<span className="font-oswald fs-20">Technical Spacification</span>}>
										<Accordion>
											<Accordion.Item eventKey="0">
												<Accordion.Header>155/70 R 13</Accordion.Header>
												<Accordion.Body>
													Chevrolet Spark, Chevrolet Spark LPG, Datsun GO, Datsun Go Plus, Datsun GO+, Hyundai EON, Hyundai
													Santro Xing, Storm
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="1">
												<Accordion.Header>175/65 R 14</Accordion.Header>
												<Accordion.Body>
													ASPIRE, Ford Classic, Ford Figo, Ford Figo Aspire, Honda Amaze, Honda Brio, Hyundai Getz, Tata
													Bolt, Tata Indica Vista, Tata Indigo CS, Tata Indigo XL, Tata Tiago, Tata Tigor, Toyota Etios,
													Toyota Etios Liva, Toyota Platinum Etios
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleProduct;
