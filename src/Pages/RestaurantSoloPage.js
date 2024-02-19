import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EditRestaurant from "../Components/EditRestaurant";
import { Button } from "react-bootstrap";
import { restaurantAPI } from "../REST/RestaurantsAPI";

export function Restaurant(props) {
  console.log("props", props);
  const { id } = useParams();
  console.log("id", id);

  const [specificRestaurant, setSpecificRestaurant] = useState([]);
  const showRestaurant = async () => {
    console.log("show restaurant", props);
    props.restaurants.map((restaurant) => {
      if (id === restaurant.id) {
        setSpecificRestaurant(restaurant);
      }
      console.log(id, "mapped restaurants", restaurant);
    });
  };

  useEffect(() => {
    showRestaurant();
  }, []);

  return (
    <div className="container fluid" id="add-new-div">
      <h2>{specificRestaurant.restaurantName}</h2> {specificRestaurant.cuisine}
      <br />
      <img
        src={specificRestaurant.img}
        alt="Image for this restaurant"
        width="500rem"
      />
      <br />
      You visited on {specificRestaurant.dateVisited}
      <br />
      Your rating was jfdkfjskfj;
      <EditRestaurant
        id={specificRestaurant.id}
        restaurantName={specificRestaurant.restaurantName}
        cuisine={specificRestaurant.cuisine}
        img={specificRestaurant.img}
        // onUpdateSuccess={updateRestaurantList}
      />
    </div>
  );
}
//   const restaurant = props.restaurant;
//   console.log(props, restaurant);
//   const [restaurants, setRestaurants] = useState([]);

//   const { deleteRestaurant } = restaurantAPI;

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const data = await restaurantAPI.get();
//         setRestaurants(data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const updateRestaurantList = () => {
//     restaurantAPI
//       .get()
//       .then((data) => {
//         setRestaurants(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching updated restaurant list:", error);
//       });
//   };

//   const handleDelete = (e, restaurant) => {
//     e.preventDefault();
//     deleteRestaurant(restaurant);
//     let updatedRest = restaurants.filter((item) => item.id !== restaurant.id);
//     setRestaurants(updatedRest);
//   };

//   return (
//     <>
//       <h2>Restaurant</h2>
//       {id}

//       <EditRestaurant
//         id={restaurant.id}
//         restaurantName={restaurant.restaurantName}
//         cuisine={restaurant.cuisine}
//         img={restaurant.img}
//         onUpdateSuccess={updateRestaurantList}
//       />
//       <Button
//         variant="dark"
//         onClick={(e) => {
//           handleDelete(e, restaurant);
//         }}
//       >
//         Delete
//       </Button>
//     </>
//   );
// }
//edit button, delete button(are you sure? alert on delete click)
//review/note
