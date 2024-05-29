import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './cartSlice';
import styles from './Cart.module.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";


export function Cart() {
  const cart = useSelector(selectCount);

  const cartCount = () => Object.keys(cart).reduce((previous, key) => {
    return previous + cart[key]
  }, 0);
  const count = cartCount()

  return (
    <div>
      <Link to="/cart" className="d-inline-flex link-body-emphasis text-decoration-none">
        <img alt="bag" height="55" src={process.env.PUBLIC_URL + "/images/bag.png"} />
        {count ? <span className={styles.value}>{count}</span> : null}
      </Link>
    </div>
  );
}
