import React from 'react';

import './styles.scss';

class BannerFlou extends React.Component{

  render(){
    return(
      <div className="banner-flou content">
        <h1>Vous êtes en panne ?</h1>
        <h1>Pas de panique !</h1>
        <a className="basic-button" href="tel:+33688523118">Contactez-nous</a>
      </div>
    );
  }
}
export default BannerFlou;
