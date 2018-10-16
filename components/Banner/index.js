import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Banner extends React.Component{

  render(){
    return(
      <div className="banner content">
        <span>{this.context.t("depannage_remorquage")}</span>
        <span>{this.context.t("24h24_7j7")}</span>
        <div className="two-buttons">
          <a href="" className="basic-button banner-button">{this.context.t("me_depanner")}</a>
          <a href="tel:+33688523118" className="basic-button banner-button">{this.context.t("nous_appeler")}</a>
        </div>
      </div>
    );
  }
}

Banner.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Banner;
