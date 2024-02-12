import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantList from "./Components/RestaurantList";

//ended up putting everything in RestaurantList so that is all that is being called within the app
export default function App() {
  return (
    <div className="container flex">
      <RestaurantList />
    </div>
  );
}
