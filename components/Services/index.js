import React from 'react';

import './styles.scss';

class Services extends React.Component{

  render(){
    return(
      <section className="content services">
        <h1>Nos services</h1>
        <div className="three-elements">
          <article>
            <span></span>
            <h1>Dépannage sur place</h1>
            <p>{"Nous pouvons dépanner votre véhicule (voiture, moto, poids lourd) sur place. Changement de roue, porte clés, etc..."}</p>
          </article>
          <article>
            <span></span>
            <h1>Remorquage</h1>
            <p>{"Faites remorquer votre véhicule où bon vous semble dans toute la France, quelque soit le type de celui-ci."}</p>
          </article>
          <article>
            <span></span>
            <h1>Destruction</h1>
            <p>{"Nous détruisons votre véhicule et nous occupons des papiers, le tout gratuitement !"}</p>
          </article>
        </div>
      </section>
    );
  }
}
export default Services;
