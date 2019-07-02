import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/portfolio/:id" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);

export default Header;
