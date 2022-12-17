import React, { useContext, useEffect, useState } from "react";

import BasketIcon from "../Cart/BasketIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderBasketButton.module.css";

const HeaderBasketButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false); // useState for managing state of the btn highlight
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  // Backticks is ES6 feature which allows creating string. This allows us to add dynamic string in the button tag as classname
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  // using useEffect helps to handle side effects of bump. To only trigger it when setBtnIsHighlighted is True.
  useEffect(() => {
    if (items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    // seting timer to stop bump after 300ms
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // clearing the timer after every successful bump
    return () => {
      clearTimeout(timer);
    };

  }, [items]);

  // JSX Code starts
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <BasketIcon />
      </span>
      <span>Your Basket</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderBasketButton;
