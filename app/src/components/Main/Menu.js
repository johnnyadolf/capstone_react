import React from 'react';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu_item'>
                <h1 className='title menu_title'>This weeks specials!</h1>
                <button className='btn'>
                    View Menu
                </button>
            </div>
            <div className="cards">
                <div className="card">
                    <img className="menu_img" src="../greek_salad.png" alt="Greek salad"/>
                    <div className="name_price">
                        <p className="item_name">Greek Salad</p>
                        <p className="item_price">$12.99</p>
                    </div>
                    <div className="item_desc">
                        <p>The famous greek salad of crispy lettuce, 
                            peppers, olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons. </p>
                    </div>
                    <div className="delivery">
                        <p>Order it now</p>
                    </div>
                </div>
                <div className="card">
                    <img className="menu_img" src="../bruschetta.jpg" alt="bruschetta"/>
                    <div className="name_price">
                        <p className="item_name">Bruschetta</p>
                        <p className="item_price">$5.99</p>
                    </div>
                    <div className="item_desc">
                        <p>Our Bruschetta is made from grilled bread that has 
                            been smeared with garlic and seasoned with salt and olive oil.  </p>
                    </div>
                    <div className="delivery">
                        <p>Order it now</p>
                    </div>
                </div>
                <div className="card">
                    <img className="menu_img" src="../lemon_dessert.jpg" alt="Lemon dessert"/>
                    <div className="name_price">
                        <p className="item_name">Lemon Dessert</p>
                        <p className="item_price">$5.00</p>
                    </div>
                    <div className="item_desc">
                        <p>This comes straight from grandma`s recipe book,
                            every last ingredient has been sourced and is as 
                            authentic as can be imagined. </p>
                    </div>
                    <div className="delivery">
                        <p>Order it now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;