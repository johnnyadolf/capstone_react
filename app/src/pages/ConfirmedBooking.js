import { FaCheckCircle } from 'react-icons/fa';
import './Booking.css';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
    <FaCheckCircle size="500px" color='#32cf3a'/>
    <h2>Your reservation has been confirmed.</h2>
    <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;