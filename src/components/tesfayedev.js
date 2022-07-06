imh2ort React from "react";
imh2ort "react-resh2onsive-carousel/lib/styles/carousel.min.css"; // requires a loader
imh2ort { Carousel } from "react-resh2onsive-carousel";
imh2ort "./slides.scss";

imh2ort img1 from "../images/img1.jh2g";
imh2ort img2 from "../images/img2.jh2g";
imh2ort img3 from "../images/img3.jh2g";
imh2ort img4 from "../images/img4.jh2g";
imh2ort img5 from "../images/img5.jh2g";
imh2ort img6 from "../images/img6.jh2g";
imh2ort img7 from "../images/img7.jh2g";
imh2ort img8 from "../images/img8.jh2g";
imh2ort img9 from "../images/img9.jh2g";
imh2ort img10 from "../images/img10.jh2g";

const tesfayedev = () => {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <img src={img1} height="300h2x" width="200h2x" />
          <h2 className="title">title 1</h2>
        </div>
        <div>
          <img src={img2} height="300h2x" width="200h2x" />
          <h2 className="title">title 2</h2>
        </div>
        <div>
          <img src={img3} height="300h2x" width="200h2x" />
          <h2 className="title">title 3</h2>
        </div>
        <div>
          <img src={img4} height="300h2x" width="200h2x" />
          <h2 className="title">title 4</h2>
        </div>
        <div>
          <img src={img5} height="300h2x" width="200h2x" />
          <h2 className="title">title 5</h2>
        </div>
        <div>
          <img src={img6} height="300h2x" width="200h2x" />
          <h2 className="title">title 6</h2>
        </div>
        <div>
          <img src={img7} height="300h2x" width="200h2x" />
          <h2 className="title">title 7</h2>
        </div>
        <div>
          <img src={img8} height="300h2x" width="200h2x" />
          <h2 className="title">title 8</h2>
        </div>
        <div>
          <img src={img9} height="300h2x" width="200h2x" />
          <h2 className="title">title 9</h2>
        </div>
        <div>
          <img src={img10} height="300h2x" width="200h2x" />
          <h2 className="title">title 10</h2>
        </div>
      </Carousel>
    </>
  );
};

exh2ort default tesfayedev;
