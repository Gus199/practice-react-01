

// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';


import Header from '../components/Header';
import DeviceList from '../components/DeviceList';

import DeviceStates from '../components/DeviceStates';
import DeviceForm from '../components/DeviceForm';
// import About from './About'
// import {DeviceProvider} from '../context/DeviceContext'





function Sample() {



 

  
  return (<>
    {/* // <DeviceProvider> */}
{/* <Router> */}
  <Header  />
    <div className="container">
      {/* <Routes> */}
      {/* <Route  path='/' element={<> */}
 <DeviceForm />
 <DeviceStates  />
 <DeviceList   />
 {/* </> } />  */}
         
           
      
          
       
   {/* <Route path='/about' element={<About />} /> */}
  

  
   {/* </Routes> */}
    </div>
    {/* </Router> */}
     {/* </DeviceProvider> */}
    </>
  );
}

export default Sample