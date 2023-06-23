import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Navigation = () => {
  return (
    <nav>
      <div>
      <ul>
        <li>
        
          
          <NavLink to="/" className="pagebtn1" activeClassName="active">Procedures</NavLink>
        </li>

      </ul>
      </div>
    </nav>
  );
};

export default Navigation;
