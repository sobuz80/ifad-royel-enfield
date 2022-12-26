import React from 'react';
import HomeLogo from '../../../asset/images/logo/LOGO.png'
import HomeApolloLogo from '../../../asset/images/homepage/apolloLogo.png'
import HomeRoyelLogo from '../../../asset/images/homepage/royalLogo.png'
import HomeTyre from '../../../asset/images/homepage/tayer-bg.png'
import HomeMotorcycle from '../../../asset/images/homepage/motorcycle-bg.png'
import Footer from '../Footer/Footer';

const WelcomePage = () => {
	return (
		<>
			<section className="homepage">
				<div class="welcome">
					<div class="logoBar">
						<img src={HomeLogo} alt="logo" />
					</div>

					<div class="websiteLink">
						<div class="row align-items-center">
							<div class="col-md-6 col-lg-6">
								<div class="item1">
									<img class="tayerImg" src={HomeTyre} alt="img" />
									<div class="logoAndBtn">
										<img class="apolloLogo" src={HomeApolloLogo} alt="img" />
										<p class="mt-3 mt-md-5">
											<a class="goBtn" target="_blank" href="#">
												<svg width="75" height="14" viewBox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#3F017A" />
													<line x1="64" y1="7.5" y2="7.5" stroke="#3F017A" />
												</svg>
											</a>
										</p>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6">
								<div class="item2">
									<img class="motorcycleImg" src={HomeMotorcycle} alt="img" />
									<div class="logoAndBtn">
										<img class="royalLogo" src={HomeRoyelLogo} alt="img" />
										<p class="mt-3 mt-md-5">
											<a class="goBtn exColor" target="_blank" href="#">
												<svg width="75" height="14" viewBox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#EE3235" />
													<line x1="64" y1="7.5" y2="7.5" stroke="#EE3235" />
												</svg>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <Footer/>
		</>
	);
};

export default WelcomePage;
