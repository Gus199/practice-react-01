
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import DeviceData from './data/DeviceData';
import DeviceStates from './components/DeviceStates';
import DeviceForm from './components/DeviceForm';
import About from './pages/About'
// import { Navigate } from 'react-router-dom';
import Card from './components/share/Card';



function App() {
  const [devices, setDevice] = useState(DeviceData)

  const deleteDevice = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setDevice(devices.filter((device) =>device.id !==id))
    }
  }

  const addDevice =(newDevice) => {
    newDevice.id = uuidv4()
    setDevice([newDevice,...devices])
  }
  return (
<Router>
  <Header  />
    <div className="container">
      <Routes>
      <Route  path='/' element={<>
 <DeviceForm  handleAdd={addDevice}/>
 <DeviceStates  devices={devices}/>
 <DeviceList  devices={devices} handleDelete={deleteDevice}/>
 </> } /> 
         
           
      
          
       
   <Route path='/about' element={<About />} />
   {/* <Card> */}
     {/* <NavLink to='/' >Home</NavLink> */}
     {/* <NavLink to='/about' >About</NavLink> */}
   {/* </Card> */}
   </Routes>
    </div>
    </Router>
    
  );
}

export default App