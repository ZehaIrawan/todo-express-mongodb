import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = false;

  const guestLinks = (
    <Fragment>
      <Link to="/">Todo</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </Fragment>
  );

  const AuthLinks = (
    <Fragment>
      <Link to="/">Todo</Link>
      <h2 onClick={console.log('logout')}>Logout</h2>
    </Fragment>
  );

  return isAuthenticated ? AuthLinks : guestLinks;
};

export default Navbar;
