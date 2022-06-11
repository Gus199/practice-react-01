import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import DeviceContext from "../context/DeviceContext";

function DeviceItem({ device }) {
  const { deleteDevice, editDevice } = useContext(DeviceContext);

  return (
    <Card>
      <div className="num-display">{device.rating}</div>
      <button onClick={() => deleteDevice(device.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editDevice(device)} className="edit">
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{device.text}</div>
    </Card>
  );
}

export default DeviceItem;
