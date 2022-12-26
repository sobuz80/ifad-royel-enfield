import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			
			{/* <Modal.Body> */}
				<div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hDiQIeYznR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			{/* </Modal.Body> */}
		</Modal>
	);
}

function App() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<a className="" variant="primary" onClick={() => setModalShow(true)}>
				<Link to="#" className="playbutton">
					<BsFillPlayCircleFill className="" />
				</Link>
			</a>

			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}

export default App;
