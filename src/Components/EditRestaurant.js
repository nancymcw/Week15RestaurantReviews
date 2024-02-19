import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { restaurantAPI } from "../REST/RestaurantsAPI";

function EditRestaurant(props) {
  const [show, setShow] = useState(false);

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
  const [updatedRestaurantDate, setUpdatedRestaurantDate] = useState(
    props.dateVisited
  );
  const { get, put } = restaurantAPI;

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedRestaurant = {
      id: props.id,
      restaurantName: updatedRestaurantName,
      cuisine: updatedRestaurantCuisine,
      img: updatedRestaurantImage,
      dateVisited: updatedRestaurantDate,
    };

    //took this from restaurantList for when submit button is pressed on Edit.
    // Need something like this for my edit button. had to log out props.onUpdateSuccess below.
    //also still being wonky with re-rendering since the meeting with Matt, have to manually refresh after edits and whatnot whichis a BUMMER
    // const updateRestaurantList = () => {
    //   restaurantAPI
    //     .get()
    //     .then((data) => {
    //       setRestaurants(data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching updated restaurant list:", error);
    //     });
    // };

    put(updatedRestaurant)
      .then((data) => {
        console.log(data); // log the response data
        // props.onUpdateSuccess();
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
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.restaurantName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="edit-modal">
            <h3>Update This Restaurant:</h3>
            <br />

            <Form>
              <Form.Group className="mb-3" controlId="formUpdateRestaurantName">
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={props.restaurantName}
                  value={updatedRestaurantName}
                  onChange={(e) => setUpdatedRestaurantName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUpdateCuisine">
                <Form.Label>Cuisine</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={props.cuisine}
                  value={updatedRestaurantCuisine}
                  onChange={(e) => setUpdatedRestaurantCuisine(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUpdateImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={props.img}
                  value={updatedRestaurantImage}
                  onChange={(e) => setUpdatedRestaurantImage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUpdateDateVisited">
                <Form.Label>Date Visited</Form.Label>
                <Form.Control
                  type="date"
                  value={updatedRestaurantDate}
                  onChange={(e) => setUpdatedRestaurantDate(e.target.value)}
                />
              </Form.Group>
            </Form>
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
