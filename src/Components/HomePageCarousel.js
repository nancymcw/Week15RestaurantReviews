import { Carousel } from "react-bootstrap";

export function HomePageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={4000}>
        {/* <ExampleCarouselImage text="First slide" />
         */}
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delicious food on a table with cutlery"
          id="carousel-img"
        />
        <Carousel.Caption>
          <h3>JB's Thai</h3>
          <p>122 Cherry St, Philadelphia, PA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hot pizza on a table"
          id="carousel-img"
        />
        <Carousel.Caption>
          <h3>Pizza Nut</h3>
          <p>4453 Broad St, Philadelphia, PA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1592646012268-607189c880a6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Italian food."
          id="carousel-img"
        />
        <Carousel.Caption>
          <h3>Arancini's</h3>
          <p>900 Washington Ave, Philadelphia, PA</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
