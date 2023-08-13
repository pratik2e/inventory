import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlant } from "../../features/plant/plantSlice";
export default function InlineDropdown() {
  const plantList = ["Plant1", "Plant2", "Plant3"]
  const selectedPlant = useSelector((state) => state.plant.plant)
  const dispatch = useDispatch()

  const handleItemClick = (itemValue) => {

    dispatch(updatePlant(itemValue))
  };

  return (
    <Dropdown inline label={selectedPlant}>
      {plantList.map((data) => (
        <Dropdown.Item
          onClick={() => handleItemClick(data)} // Pass a function to onClick
          key={data}
        >
          {data}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
