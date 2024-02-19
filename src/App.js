import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./Pages/Home";
import { RestaurantsPage } from "./Pages/RestaurantsPage";
import { NewRestaurantForm } from "./Pages/NewRestaurantForm";
import { Restaurant } from "./Pages/RestaurantSoloPage";
import { Navigation } from "./Components/Navigation";
import { restaurantAPI } from "./REST/RestaurantsAPI";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
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

  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/restaurants">
            <Route
              index
              element={
                <RestaurantsPage
                  restaurants={restaurants}
                  setRestaurants={setRestaurants}
                />
              }
            />
            <Route
              path=":id"
              element={<Restaurant restaurants={restaurants} />}
            />
          </Route>
          <Route path="/addnewrestaurant" element={<NewRestaurantForm />} />
        </Routes>
      </Router>
    </>
  );
}
