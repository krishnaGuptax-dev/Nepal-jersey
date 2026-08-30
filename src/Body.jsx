import Carousel from "react-bootstrap/Carousel";

const Body = () => {
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src="offf.webp"
          alt="Slide 1"
          className="d-block w-full h-full object-fit-cover"
        />
      </Carousel.Item>

      <Carousel.Item style={{ height: "500px" }}>
        <img
          src="slide2.webp"
          alt="Slide 2"
          className="d-block w-100 h-100 object-fit-cover"
        />
      </Carousel.Item>

     
    </Carousel>
  );
};

export default Body;