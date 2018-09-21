import React from 'react';

import './styles.scss';

class ServicesNumber extends React.Component{

  render(){
    return(
      <section className="content services-number">
        <h1>{"Dépann'moi c'est"}</h1>
        <div className="four-elements">
          <article>
            <h1>4500</h1>
            <p>{"Nos partenaires"}</p>
          </article>
          <article>
            <h1>100%</h1>
            <p>{"Une application gratuite"}</p>
          </article>
          <article>
            <h1>5 Pays</h1>
            <p>{"Une présence dans"}</p>
          </article>
          <article>
            <h1>69€</h1>
            <p>{"A partir de"}</p>
          </article>
        </div>
      </section>
    );
  }
}
export default ServicesNumber;
