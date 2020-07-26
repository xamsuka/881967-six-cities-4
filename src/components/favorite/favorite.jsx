import React from "react";
import Header from "../header/header.jsx";
import FavoriteItems from '../favorite-items/favorite-items.jsx';

const Favorite = (props) => {
  return (
    <React.Fragment>
      <div classname="page">

        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>

              <FavoriteItems />

            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Favorite;
