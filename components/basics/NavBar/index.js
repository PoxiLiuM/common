import React from 'react';
import PropTypes from "prop-types";
import './styles.scss';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav>
        <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
