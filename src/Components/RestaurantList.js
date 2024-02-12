import React, { useState, useEffect } from "react";
import { restaurantAPI } from "../REST/RestaurantsAPI";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import EditRestaurant from "./EditRestaurant";
import AddNewRestaurant from "./AddNewRestaurant";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const { deleteRestaurant } = restaurantAPI;

  // I used useEffect to fetch the restaurant data on first render and set the state to that data
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await restaurantAPI.get();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // This function is used as a property in my AddNewRestaurants component to update the page
  const updateRestaurantList = () => {
    restaurantAPI
      .get()
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching updated restaurant list:", error);
      });
  };
  // Function for handling deletion with delete button
  const handleDelete = (e, restaurant) => {
    e.preventDefault();
    deleteRestaurant(restaurant);
    let updatedRest = restaurants.filter((item) => item.id !== restaurant.id);
    setRestaurants(updatedRest);
  };

  // This function is also used to be a property in a component below.
  const fetchRestaurants = () => {
    restaurantAPI
      .get()
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurant list:", error);
      });
  };

  // Function to update the list of restaurants after a successful addition
  const onPostSuccess = () => {
    fetchRestaurants();
  };

  return (
    <div>
      <AddNewRestaurant onPostSuccess={onPostSuccess} />
      <h2>Restaurant List</h2>
      <Row>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            style={{ width: "18rem", padding: "5px", margin: "5px" }}
          >
            <Card.Img
              id="card-img"
              variant="top"
              src={restaurant.img}
              alt={restaurant.restaurantName}
            />
            <Card.Body>
              <Card.Title id="greenCardTitle">
                {restaurant.restaurantName}
              </Card.Title>
              <Card.Text>
                <strong>Cuisine:</strong> {restaurant.cuisine}
              </Card.Text>
              <br />
              <br />
              <EditRestaurant
                id={restaurant.id}
                restaurantName={restaurant.restaurantName}
                cuisine={restaurant.cuisine}
                img={restaurant.img}
                onUpdateSuccess={updateRestaurantList}
              />
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
  );
};

export default RestaurantList;
