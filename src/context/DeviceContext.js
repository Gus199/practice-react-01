import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const DeviceContext = createContext()

export const DeviceProvider = ({children}) => {
    const [devices, setDevices]= useState([
        {
            id:1,
            text:'This item is from Context',
            rating: 10
        }
    ])

    const [deviceEdit, setDeviceEdit] = useState(({
        item: {},
        edit: false
    }))

    const deleteDevice = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          setDevices(devices.filter((device) =>device.id !==id))
        }
      }

      const addDevice =(newDevice) => {
        newDevice.id = uuidv4()
        setDevices([newDevice,...devices])
      }
     
      const editDevice = (item) => {
          setDeviceEdit({
              item,
              edit: true
          })
      }

    //   Update Device item: 
    const updateDevcice = (id, updItem) => {
setDevices(devices.map((item) => item.id === id ? {...item,...updItem}: item))
    }
    return <DeviceContext.Provider value={{
       devices,
       deleteDevice,
       addDevice,
       editDevice,
       deviceEdit,
       updateDevcice
    }}>
        {children}
    </DeviceContext.Provider>

}

export default DeviceContext

