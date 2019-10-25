import React from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        EIT Management App
      </a>
      <div className="col-3 float-right ml-auto">
        <button className="btn btn-primary">
          <AccountsUIWrapper />
        </button>
      </div>
    </nav>
  );
};

export default Nav;