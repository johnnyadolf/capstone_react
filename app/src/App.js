import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './routes/bookingpage';
import Confirmed from './routes/confirmedpage';
import Home from './routes/mainpage';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reservations' element={<Booking/>}/>
      <Route path='/confirmation' element={<Confirmed/>}/>
      
    </Routes>
      
    </>
  );
}

export default App;
