import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Galleryslider from './Galleryslider';

import ModalVideo from 'react-modal-video'

const Gallery = () => {

	// const [isOpen, setOpen] = useState(false)


	return (
		<>



			<section id='gallery' className="section_padding">
				<div className="container">
					<div className='sectionTitle'>
						<h2 className="secTitle">Product Gallery</h2>
					</div>
					<div className="row">
						<div className='galleryNavBox'>

							{/* <Tabs id="controlled-tab-example" className="galleryNav mb-4">
								<Tab eventKey="all" title="All">
									<Galleryslider />
								</Tab> */}
								{/* <Tab eventKey="apollo" title="Apollo"> */}
									<Galleryslider />
								{/* </Tab> */}
							{/* </Tabs> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
