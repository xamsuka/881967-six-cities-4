import React from "react";

const Header = (props) => {
  const {userData} = props;

  const textButtonProfile = userData || `Sign In`;
  const classUsetText = userData ? `header__user-name user__name` : `header__login`;
  const userLink = userData.id ? `/favorite` : `/sign-in`;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href={userLink}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className={classUsetText}>
                      {textButtonProfile}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
