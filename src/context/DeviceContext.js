import { createContext, useState , useEffect} from "react";


const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
  const [devices, setDevices] = useState([]);

  const [deviceEdit, setDeviceEdit] = useState({
    item: {},
    edit: false,
  });
useEffect(() => {
  setTimeout(() =>{
    fetchDevices()
  }, 500)

}, [])

// Fetch Devices:
const fetchDevices = async () => {
    const response = await fetch(`/devices?_sort=id&_order=desc`)
    const data = await response.json()
    setDevices(data)
    setIsLoading(false)
}
  const deleteDevice = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setDevices(devices.filter((device) => device.id !== id));
    }
  };

  //Add Devices

  const addDevice = async(newDevice) => {
    const response = await fetch('/devices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDevice),
      
    
    })
    const data = await response.json()
   
    setDevices([data, ...devices]);
  };

  const editDevice = (item) => {
    setDeviceEdit({
      item,
      edit: true,
    });
  };

  //   Update Device item:
  const updateDevcice = (id, updItem) => {
    setDevices(
      devices.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <DeviceContext.Provider
      value={{
        devices,
        deleteDevice,
        addDevice,
        editDevice,
        deviceEdit,
        updateDevcice,
        isLoading
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;
