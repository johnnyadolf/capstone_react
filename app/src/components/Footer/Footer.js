import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <img src="../footer_logo.png" alt="Footer Logo" />
            <div className="footer_content">
                <div className="footer_links">
                    <p className="footer_head">Navigation</p>
                    <Link to="/" className="footer_link_item">Home</Link>
                    <Link to="/" className="footer_link_item">About</Link>
                    <Link to="/" className="footer_link_item">Menu</Link>
                    <Link to="/reservations" className="footer_link_item">Reservations</Link>
                    <Link to="/" className="footer_link_item">Order Online</Link>
                    <Link to="/" className="footer_link_item">Login</Link>
                </div>
                <div className="footer_contact">
                    <p className="footer_head">Contact</p>
                    <a href="/" className="footer_link_item">Address: 123 Main St, Anytown, ASU</a>
                    <a href="/" className="footer_link_item">Phone Number:0123 456 789</a>
                    <a href="/" className="footer_link_item">Email: sample@example.com</a>
                </div>
                <div className="footer_socials">
                    <p className="footer_head">Social Media</p>
                    <a href="/" className="footer_link_item">Facebook</a>
                    <a href="/" className="footer_link_item">Instagram</a>
                    <a href="/" className="footer_link_item">Twitter</a>
                    <a href="/" className="footer_link_item">LinkedIn</a>
                    <a href="/" className="footer_link_item">Pinterest</a>
                    <a href="/" className="footer_link_item">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;