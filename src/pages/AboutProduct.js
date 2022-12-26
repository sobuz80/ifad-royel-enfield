import React from 'react';
import Banner from '../components/Section/aboutbanner/Banner';
import Footer from '../components/Section/Footer/Footer';
import Manubar from '../components/Section/navbar/Manubar';
import SingleProduct from '../components/Section/singleproduct/SingleProduct';

const AboutProduct = () => {
	return (
		<>
			<Manubar />
			<Banner/>
			<SingleProduct />
			<Footer />
		</>
	);
};

export default AboutProduct;
