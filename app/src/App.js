import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Pages/bookingpage';
import Confirmed from './components/Pages/confirmedpage';
import Home from './components/Pages/mainpage';


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
