import React, { useState } from "react";
import { restaurantAPI } from "../REST/RestaurantsAPI";

const AddNewRestaurant = (props) => {
  const [newRestaurantName, setNewRestaurantName] = useState("");
  const [newRestaurantImage, setNewRestaurantImage] = useState("");
  const [newRestaurantCuisine, setNewRestaurantCuisine] = useState("");

  const { post } = restaurantAPI;
  //Post submit button for the new restaurant form.
  const handlePostSubmit = (e) => {
    e.preventDefault();
    // returning alert if there is an empty input in the form
    if (!newRestaurantName || !newRestaurantCuisine || !newRestaurantImage) {
      return alert("Need all fields filled.");
    }

    // POST
    post(newRestaurantName, newRestaurantCuisine, newRestaurantImage)
      .then((data) => {
        console.log(data); // logging data for myself
        props.onPostSuccess(); // updating the list of restaurants
        // then clearing the form
        setNewRestaurantName("");
        setNewRestaurantCuisine("");
        setNewRestaurantImage("");
      })
      .catch((error) => {
        console.error("Error adding new restaurant:", error);
      });
  };
  //and then form which we've used in multiple assignments now with onChange and e.target.value
  return (
    <div>
      <form>
        <h3>Add New Restaurant:</h3>
        <br />
        <label>Restaurant Name</label>
        <input
          placeholder="Enter Restaurant Name"
          value={newRestaurantName}
          onChange={(e) => setNewRestaurantName(e.target.value)}
        />
        <br />
        <label>Cuisine</label>
        <input
          placeholder="Enter type of cuisine"
          value={newRestaurantCuisine}
          onChange={(e) => setNewRestaurantCuisine(e.target.value)}
        />
        <br />
        <label>Image</label>
        <input
          placeholder="Enter image URL"
          value={newRestaurantImage}
          onChange={(e) => setNewRestaurantImage(e.target.value)}
        />
        <br />
        <button onClick={(e) => handlePostSubmit(e)}>Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default AddNewRestaurant;
