import { Food } from "../types/food";
import { useEffect, useState } from "react";

function FoodList() {
  const [foodData, setFoodData] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch("https://localhost:7025/food");
      const temp = await rsp.json();
      setFoodData(temp);
    };
    fetchFood();
  }, []);

  return (
    <>
      <div className="row">
        <h3>The best food in the Marriott School.</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Event Name:</th>
            <th>Vendor:</th>
            <th>Rating:</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr key={f.foodId}>
              <td>{f.eventName}</td>
              <td>{f.vendor}</td>
              <td>{f.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
