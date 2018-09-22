import React from 'react';

import './styles.scss';
import logo from '../../images/depannmoi/newlogo.png';

class About extends React.Component{

  render(){
    return(
      <section className="about content">
        <div>
          <div>
            <img src={logo} alt="logo" />
            <div>
              <h1>{"DEPANNAGE AUTO – MOTO – POIDS LOURDS"}</h1>
              <p>{"Dépann’moi, c’est une plateforme de mise en relation entre dépanneurs-remorqueurs et monsieur/madame tout le monde."}</p>
              <p>{"Nous permettons aux personnes qui sont à la recherche d’un dépanneur automobile (voitures, motos, camions, poids-lourds, …) de les connecter directement à un professionnel,via l’application smartphone gratuite Depann’moi (disponible sur iOS et Android ) ou directement grâce à ce site internet par l’onglet « Réserver » afin de lui éviter des tracas supplémentaires."}</p>
            </div>
            <a href="#" className="basic-button">En savoir plus</a>
          </div>
        </div>
        <div></div>
      </section>
    );
  }
}
export default About;
