import React from 'react';

import './styles.scss';

class NavBar extends React.Component{

  render(){
    return(
      <div className="header-topbar content">
       <span>{"Les n° de permanence 24/24 - 7/7"}</span>
       <span><a href="tel:+33688523118">06 88 52 31 18</a></span>
       <span><a href="mailto:contact@depannmoi.com">contact@depannmoi.com</a></span>
      </div>
    );
  }
}
export default NavBar;
