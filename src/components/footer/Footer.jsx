import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer
       bg-orange-500 w-screen h-13 flex flex-row justify-between p-1"
      data-testid="footer"
    >
      <Link to="drinks">
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="explore">
        <img src={ exploreIcon } alt="exploreIcon" data-testid="explore-bottom-btn" />
      </Link>
      <Link to="foods">
        <img src={ mealIcon } alt="mealIcon" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
