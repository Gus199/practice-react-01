import Card from "./share/Card"
import {FaTimes} from 'react-icons/fa'



function DeviceItem({device, handleDelete}) {
   
  return (
    <Card>
        <div className='num-display'>{device.rating}</div>
        <button onClick={() =>handleDelete(device.id)}className="close">
        <FaTimes  />
        </button>
      
        <div className='text-display'>{device.text}</div>
        
        </Card>

    
  )
}

export default DeviceItem