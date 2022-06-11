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

// Delete Device:
  const deleteDevice = async(id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/devices/${id}`, {method: 'DELETE'})
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
  const updateDevcice = async(id, updItem) => {
    const response = await fetch(`/devices/${id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(updItem)
    })
    const data = await response.json()
    setDevices(
      devices.map((item) => (item.id === id ? { ...item, ...data } : item))
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
