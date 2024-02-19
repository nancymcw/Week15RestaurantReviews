import { HomePageCarousel } from "../Components/HomePageCarousel";
import { LoginForm } from "../Components/LoginForm";
import { Row, Col, Container } from "react-bootstrap";

export function Home() {
  return (
    <div className="container fluid" id="add-new-div">
      <h2>Welcome to Tastify</h2>
      <p>
        Keep track of where you've been to eat and if you'd like to go back.
        Share with your friends and find new restaurants to try!
      </p>

      <Row>
        <Col>
          <HomePageCarousel />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}
