import React, { useState } from "react";
import { restaurantAPI } from "../REST/RestaurantsAPI";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const AddNewRestaurant = (props) => {
  const [newRestaurantName, setNewRestaurantName] = useState("");
  const [newRestaurantImage, setNewRestaurantImage] = useState("");
  const [newRestaurantCuisine, setNewRestaurantCuisine] = useState("");
  const [newRestaurantDate, setNewRestaurantDate] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const { post } = restaurantAPI;

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

  const onPostSuccess = () => {
    fetchRestaurants();
  };

  //Post submit button for the new restaurant form.
  const handlePostSubmit = (e) => {
    e.preventDefault();
    // returning alert if there is an empty input in the form
    if (
      !newRestaurantName ||
      !newRestaurantCuisine
      // || !newRestaurantImage
    ) {
      // return alert("Please fill in all fields for new restaurant.");
      return alert("Please at least add name & cuisine for new restaurant.");
    }

    // POST
    post(
      newRestaurantName,
      newRestaurantCuisine,
      newRestaurantImage,
      newRestaurantDate
    )
      .then((data) => {
        console.log(data); // logging data for myself
        onPostSuccess(); // updating the list of restaurants
        // then clearing the form
        setNewRestaurantName("");
        setNewRestaurantCuisine("");
        setNewRestaurantImage("");
        setNewRestaurantDate("");
      })
      .catch((error) => {
        console.error("Error adding new restaurant:", error);
      });
  };

  return (
    <div className="container fluid" id="add-new-div">
      <Form>
        <Form.Group className="mb-3" controlId="formNewRestaurantName">
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Restaurant Name"
            value={newRestaurantName}
            onChange={(e) => setNewRestaurantName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNewCuisine">
          <Form.Label>Cuisine</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Cuisine"
            value={newRestaurantCuisine}
            onChange={(e) => setNewRestaurantCuisine(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNewImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Optional. Picture of food or the restaurant itself!"
            value={newRestaurantImage}
            onChange={(e) => setNewRestaurantImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNewImage">
          <Form.Label>Date Visited</Form.Label>
          <Form.Control
            type="date"
            value={newRestaurantDate}
            onChange={(e) => setNewRestaurantDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" onClick={(e) => handlePostSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNewRestaurant;
