import RestaurantList from "../Components/RestaurantList";

export function RestaurantsPage({ restaurants, setRestaurants }) {
  return (
    <div className="container fluid">
      <RestaurantList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
    </div>
  );
}
