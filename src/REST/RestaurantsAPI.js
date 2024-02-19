const RESTAURANTS_ENDPOINT =
  "https://6597777c668d248edf22df89.mockapi.io/Restaurants";

//all of my API handling is in this file which I import in any file that uses post, get, update or delete

class RestaurantsAPI {
  post = async (restaurantName, cuisine, img, dateVisited) => {
    try {
      const response = await fetch(`${RESTAURANTS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantName: restaurantName,
          cuisine: cuisine,
          img:
            img ||
            "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
          dateVisited: dateVisited || null,
        }),
      });
      return await response.json();
    } catch (postException) {
      console.log("Issue with POST", postException);
    }
  };

  get = async () => {
    try {
      const response = await fetch(RESTAURANTS_ENDPOINT);
      const data = await response.json();
      return data;
    } catch (getException) {
      console.log("Issue with GET", getException);
    }
  };

  put = async (restaurant) => {
    try {
      console.log(restaurant);
      const response = await fetch(`${RESTAURANTS_ENDPOINT}/${restaurant.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      const data = await response.json();
      return data;
    } catch (putException) {
      console.log("Issue with PUT", putException);
    }
    this.get();
  };

  deleteRestaurant = async (restaurant) => {
    try {
      // console.log(restaurant);
      const response = await fetch(`${RESTAURANTS_ENDPOINT}/${restaurant.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (deleteException) {
      console.log("Issue with DELETE", deleteException);
      this.get();
    }
  };
}

export const restaurantAPI = new RestaurantsAPI();
