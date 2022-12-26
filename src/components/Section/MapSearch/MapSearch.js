import React from 'react';
import Map from '../../../asset/images/trans-map2.png'

const MapSearch = () => {
	return (
		<>
			<section id='map' className="section_padding">
				<div className="container">
				<div className='sectionTitle'>
					<h2 className="secTitle">Dealer Locator</h2>
					<p className='fs-16 text-center'>
						select your city to find out distributors in your area
					</p>
				</div>
					<div className="row justify-content-between align-items-center">
							<div className="col-md-4">
								<div className="selectLocation">
									<form action="">
										<select class="form-select mb-3 ps-1 text-uppercase" aria-label="Default select example">
											<option selected className='option text-dark'>Select Division</option>
											<option value="1" className='option text-dark text-capitalize fs-16'>One</option>
											<option value="2" className='option text-dark text-capitalize fs-16'>Two</option>
											<option value="3" className='option text-dark text-capitalize fs-16'>Three</option>
										</select>
										<select class="form-select mb-3 ps-1 text-uppercase" aria-label="Default select example">
											<option selected className='text-dark'>Select District</option>
											<option value="1" className='text-dark text-capitalize fs-16'>One</option>
											<option value="2" className='text-dark text-capitalize fs-16'>Two</option>
											<option value="3" className='text-dark text-capitalize fs-16'>Three</option>
										</select>
										<button type='submit' className='border-0 bg-danger mt-4 font-calibri text-uppercase text-light fs-15 px-4 py-2 rounded'>search</button>
									</form>
								</div>
							</div>
							<div className="col-md-4">
								<div className='locationMap d-flex align-items-center justify-content-end h-100'>
									<img src={Map} alt="img"/>
								</div>
							</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MapSearch;
