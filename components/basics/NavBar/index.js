import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import logo from '../../../images/depannmoi/newlogo.png';

class NavBar extends React.Component{

  render(){
    return(
      <nav className="navbar content">
        <div className="navbar--logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar--item">
          <a href="">{this.context.t("home")}</a>
          <a href="">{this.context.t("our_services")}</a>
          <a href="">{this.context.t("tarification")}</a>
          <a href="">{this.context.t("contact_us")}</a>
          {/*<a href="#" className="navbar--item-highlight">Me dépanner</a>*/}
        </div>
      </nav>
    );
  }
}

NavBar.contextTypes = {
  t: PropTypes.func.isRequired
}
export default NavBar;
