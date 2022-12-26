import React, { useState } from 'react';
import NewsSlider from './NewsSlider';
import SliderData from '../NewsEvents/NewsData'


const NewsEvents = () => {
  const [cardData, setcardData] = useState(SliderData);

	return (
		<>
			<section id='newsEvents' className="section_padding">
				<div className="container">
					<div className="row">
						<div className='sectionTitle'>
							<h2 className="secTitle">News & Events</h2>
							<p className="text-center font-16 font-lato mb-4">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
							layout.
							<br/>
							The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
							</p>
						</div>
              			<NewsSlider sendCardData={cardData}/>
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsEvents;
