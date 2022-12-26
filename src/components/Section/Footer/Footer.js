import React from 'react';
import FooterLogo from '../../../asset/images/footer/footerlogo.png';
import {Link} from 'react-router-dom';
import FooterApi from '../../../asset/images/footer/API-logo.png';
import {CgFacebook} from 'react-icons/cg';
import {BsInstagram} from 'react-icons/bs';
import {AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Number from '../../../asset/images/footer/footerCall.png';
// import { BsFillBookFill } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3">
                            <img src={FooterLogo} alt="img" className="footerLogo"/>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul className="footerMenu list-unstyled">
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        About Us
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        Products
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        Dealer Locator
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        Products
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        News & Events
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        Careers
                                    </Link>
                                </li>
                                <li className="footerNav">
                                    <Link to="#" className="fNav">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="fllowOnBox">
                                <h4 className="fllowOn text-uppercase text-light pt-2 font-calibri">Follow on</h4>
                                <div className="footerSocial">
                                    <Link to="#" className="socialLink">
                                        <CgFacebook/>
                                    </Link>
                                    <Link to="#" className="socialLink">
                                        <BsInstagram/>
                                    </Link>
                                    <Link to="#" className="socialLink">
                                        <AiFillLinkedin/>
                                    </Link>
                                    <Link to="#" className="socialLink">
                                        <AiFillYoutube/>
                                    </Link>
                                </div>
                                <img src={Number} alt="img" className="fCall"/>
                            </div>
                        </div>
                    </div>
                    <div className="copyright d-flex justify-content-center justify-content-sm-between">
						<div className="left">
							<p className="text-light fs-14 m-0">
								@all rights reserved: Developed by
								<Link to="#" className="termsLink">
									<img src={FooterApi} alt="img" className="apiLogo"/>
								</Link>
							</p>
						</div>
						<div className="right">
							<p className="text-light fs-14 m-0">
									<span>Terms of use</span>
								<Link to="#" className="socialLink termsLink">
									Privacy & Policy
								</Link>
							</p>
						</div>
					</div>
				</div>
            </section>
        </>
    );
};

export default Footer;
