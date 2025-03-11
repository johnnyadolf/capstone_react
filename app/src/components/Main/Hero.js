import { Link } from 'react-router-dom';
import Menu from './Menu';

const Hero = () => {
  return (
    <>
      <div className='main_section'>
        <div className='main_section_content'>
          <div className='main_section_text'>
            <p className='title'>Little Lemon</p>
            <p className='subtitle'>Chicago</p>
            <p className='desc'>We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations" className='reserve_btn btn'>
              Reserve a table
            </Link>
          </div>
          <div className='img_wrapper'>
            <img className='main_img' src="../main_img.png" alt="Main" />
          </div>
        </div>
      </div>
      <Menu/>
    </>
  );
};

export default Hero;