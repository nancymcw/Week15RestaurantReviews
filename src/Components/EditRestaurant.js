import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { restaurantAPI } from "../REST/RestaurantsAPI";

function EditRestaurant(props) {
  const [show, setShow] = useState(false);

  //Loved getting practice with a Modal again, for popping up an EDIT/PUT form. Here is to handle opening and closing by setting it to true or false.
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedRestaurantName, setUpdatedRestaurantName] = useState(
    props.restaurantName
  );
  const [updatedRestaurantCuisine, setUpdatedRestaurantCuisine] = useState(
    props.cuisine
  );
  const [updatedRestaurantImage, setUpdatedRestaurantImage] = useState(
    props.img
  );
  // I only take out/destructure the functions I need from restaurantAPI.
  const { get, put } = restaurantAPI;

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // Creating variable with identicle data to then put into PUT function below.
    const updatedRestaurant = {
      id: props.id,
      restaurantName: updatedRestaurantName,
      cuisine: updatedRestaurantCuisine,
      img: updatedRestaurantImage,
    };

    put(updatedRestaurant)
      .then((data) => {
        console.log(data); // log the response data
        props.onUpdateSuccess();
        handleClose(); // close the modal after successful update
      })
      .catch((error) => {
        console.error("Error updating restaurant:", error);
      });
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static" //wanted a form that doesn't close when you click anotehr part of the page so I chose static.
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.restaurantName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="edit-modal">
            <h3>Update This Restaurant:</h3>
            <br />
            <label>Restaurant Name</label>
            <input
              placeholder={props.restaurantName}
              value={updatedRestaurantName}
              onChange={(e) => setUpdatedRestaurantName(e.target.value)}
            ></input>
            <br />
            <label>Cuisine</label>
            <input
              placeholder={props.cuisine}
              value={updatedRestaurantCuisine}
              onChange={(e) => setUpdatedRestaurantCuisine(e.target.value)}
            ></input>
            <br />
            <label>Image</label>
            <input
              placeholder={props.img}
              value={updatedRestaurantImage}
              onChange={(e) => setUpdatedRestaurantImage(e.target.value)}
            ></input>
            <br />
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            form="edit-modal"
            onClick={(e) => {
              handleUpdateSubmit(e);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRestaurant;
