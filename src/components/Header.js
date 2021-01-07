import React from "react";
import logo from "../images/logo.svg";
import {NavLink, Route} from 'react-router-dom'

export default function Header({headerMail, signOut}) {
  return (
    <header className="header">
    <img src={logo} alt="логотип" className="header__logo" />
    <Route exact path="/">
      <div className="header__info">
        <p className="header__mail">{headerMail}</p>
        <NavLink to="/sign-in" className="header__out" onClick={signOut}>
          Выйти
        </NavLink>
      </div>
    </Route>
    <Route path="/sign-in">
      <div className="header__sign-block">
        <NavLink to="/sign-up" className="header__button">
          Регистрация
        </NavLink>
      </div>
    </Route>
    <Route path="/sign-up">
      <div className="header__sign-block">
        <NavLink to="/sign-in" className="header__button">
          Войти
        </NavLink>
      </div>
    </Route>
  </header>
);
}
