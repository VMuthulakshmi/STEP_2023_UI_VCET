import { useEffect, useState } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantList = () => {

  //TODO: initalize retsturant state.
  const [restaurantState, setRestaurantState ]= useState([]);

  /**
 * Fetch the list of restaurants from RestaurantService and updates the component state.
 * Sets the state to display loading indicator during data fetch from service.
 */
  async function fetchRestaurantList() {
    let restaurantsList = await RestaurantService.getRestaurantsList();
   //TODO: set states according to the result.
    if (restaurantsList.length > 0) {
      setRestaurantState(restaurantsList);
    
    }
    
  }

  useEffect(() => {
    fetchRestaurantList();
  }, [])


  return (
    <div className="restaurant-list-container">
      <HeaderBar />
      <div className="restaurant-list-wrapper child">
        {/* //TODO: Iterate the result */}
        {restaurantState.map(res => {
          return (
            <div>
              <RestaurantCard
                key={res.id}
                restaurant={res}
                index={res.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantList;
