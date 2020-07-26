import React, {PureComponent, createRef} from "react";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
    this.onSubmit = this.props;
    this._submitHandler = this._submitHandler.bind(this);
  }

  _submitHandler(evt) {
    evt.preventDefault();

    this.onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div style={{ display: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <symbol id="icon-arrow-select" viewBox="0 0 7 4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
                />
              </symbol>
              <symbol id="icon-bookmark" viewBox="0 0 17 18">
                <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
              </symbol>
              <symbol id="icon-star" viewBox="0 0 13 12">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
                />
              </symbol>
            </svg>
          </div>
          <div className="page page--gray page--login">
            <header className="header">
              <div className="container">
                <div className="header__wrapper">
                  <div className="header__left">
                    <a className="header__logo-link" href="main.html">
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
                          href="#"
                        >
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__login">Sign in</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
            <main className="page__main page__main--login">
              <div className="page__login-container container">
                <section className="login">
                  <h1 className="login__title">Sign in</h1>
                  <form className="login__form form" action="#" method="post">
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">E-mail</label>
                      <input
                        className="login__input form__input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        ref = {this.loginRef}
                        required
                      />
                    </div>
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">Password</label>
                      <input
                        className="login__input form__input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref = {this.passwordRef}
                        required
                      />
                    </div>
                    <button
                      className="login__submit form__submit button"
                      type="submit" onSubmit = {this._submitHandler}
                    >
                      Sign in
                    </button>
                  </form>
                </section>
                <section className="locations locations--login locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
