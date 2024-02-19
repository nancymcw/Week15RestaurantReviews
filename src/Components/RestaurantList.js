import React, { useState, useEffect } from "react";
import { restaurantAPI } from "../REST/RestaurantsAPI";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HandThumbsDown,
  HandThumbsDownFill,
  HandThumbsUp,
  HandThumbsUpFill,
} from "react-bootstrap-icons";
import thumbsup from "../assets/thumbsup.svg";
import thumbsdown from "../assets/thumbsdown.svg";

const RestaurantList = ({ restaurants, setRestaurants }) => {
  console.log("restaurant list", restaurants);

  // const [restaurants, setRestaurants] = useState([]);

  const { deleteRestaurant } = restaurantAPI;

  // Function for handling deletion with delete button
  const handleDelete = (e, restaurant) => {
    e.preventDefault();
    deleteRestaurant(restaurant);
    let updatedRest = restaurants.filter((item) => item.id !== restaurant.id);
    setRestaurants(updatedRest);
  };

  return (
    <div>
      <h2>My Restaurants</h2>
      <div className="card--container">
        <Row>
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              style={{ width: "18rem", padding: "5px", margin: "5px" }}
            >
              <Link to={`${restaurant.id}`}>
                <Card.Img
                  id="card-img"
                  variant="top"
                  src={restaurant.img}
                  alt={restaurant.restaurantName}
                />
              </Link>
              <Card.Body>
                <Link to={`${restaurant.id}`}>{restaurant.restaurantName}</Link>
                <Card.Title id="greenCardTitle">
                  {restaurant.restaurantName}
                </Card.Title>
                <Card.Text>
                  <strong>Cuisine:</strong> {restaurant.cuisine}
                  <br />
                  <strong>Date visited:</strong> {restaurant.dateVisited}
                </Card.Text>
                <br />
                <Button variant="success">
                  <HandThumbsUp size={35} />
                </Button>
                <Button variant="success">
                  <HandThumbsDown size={35} />
                </Button>
                <br />
                {/* <EditRestaurant
                  id={restaurant.id}
                  restaurantName={restaurant.restaurantName}
                  cuisine={restaurant.cuisine}
                  img={restaurant.img}
                  onUpdateSuccess={updateRestaurantList}
                /> */}
                <Button
                  variant="dark"
                  onClick={(e) => {
                    handleDelete(e, restaurant);
                  }}
                >
                  Delete
                </Button>
                <br />
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RestaurantList;
