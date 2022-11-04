import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function HomeCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={5000}>
        <div className='carousel-img'>
        <img
          className="d-block img-fluid"
          src="https://img.freepik.com/free-vector/tiny-pharmacists-with-rx-prescription-drugs_74855-7882.jpg?w=1380&t=st=1667457058~exp=1667457658~hmac=96cd4b40bef9360dc1945306b62d31513bebc14e372fcde9f36a90403f6504bd"
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3 className="carousel-text">Buy medicines online</h3>
          <p>Shop Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <div className='carousel-img'>
        <img
          className="d-block img-fluid"
          src="https://img.freepik.com/free-vector/prevent-epidemic-rebound-concept-illustration_114360-3008.jpg?w=1380&t=st=1667458171~exp=1667458771~hmac=c40712624754e71f47126765a326a60a21863b490649001a74994813a0b8e48c"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3 className="carousel-text">Covid Essentials</h3>
          <p>Shop Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-img'>
        <img
          className="d-block img-fluid"
          src="https://img.freepik.com/free-vector/tiny-pharmacists-with-prescription-drugs-patients-pharmaceutical-industry-rx-symbol-bottle-painkillers-flat-vector-illustration-pharmacy-medicine-health-concept-banner_74855-25358.jpg?w=1380&t=st=1667457709~exp=1667458309~hmac=158fd1c6a0444cd3c6ace0586fc996d52aa54dd19b4d4e0db43be614bdd081fa"
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3 className="carousel-text">Upload Prescription</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
