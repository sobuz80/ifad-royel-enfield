import { React, useState } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const image1 =
  "https://i.postimg.cc/VNjSMMdM/classic-350-motorcasdasdaycle-2.png";
const image2 =
  "https://i.postimg.cc/FKtd7GsN/classic-350-motorcycle-3.jpg";
const image3 =
  "https://i.postimg.cc/rFPtLMBd/New-REBikes1.jpg";
const image4 =
  "https://i.postimg.cc/13VVmbSv/scram-411-landing-1.jpg";
const image5 =
  "https://i.postimg.cc/FKtd7GsN/classic-350-motorcycle-3.jpg";
const image6 =
  "https://i.postimg.cc/rFPtLMBd/New-REBikes1.jpg";


//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6];


//MAIN APP COMPONENT
function App() {
  return (
    <div className="App">
      <h1>Simple React Lightbox</h1>
      <p>
        featuring adorable animal pictures from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash
        </a>
      </p>
      <ImageGallery />
    </div>
  );
}
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      <div className="ms-2 me-2">
					{imageCards}
				</div>
      
      { lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}><BsChevronLeft/></button>
          	<img id="lightbox-img" src={imageToShow} className="p-0"></img>
          <button onClick={showNext}><BsChevronRight/></button>
        </div>
       :''
      }
    </>
  );
}
 export default ImageGallery
