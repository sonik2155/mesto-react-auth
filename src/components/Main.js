import React from "react";
import Pencil from "../images/Pencil.svg";
import Plus from "../images/plus.svg";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onCardDelete, cards, onCardLike, onAddPlace, onEditProfile, onEditAvatar, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  
  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__zone"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <button
            type="button"
            onClick={onEditAvatar}
            className="profile__avatar-button"
          >
            <img className="profile__pencil-img" alt={currentUser.name} src={Pencil} />
          </button>
        </div>
        <div className="profile__info-container">
          <div className="profile__container">
            <h1 className="profile__info-title"> {currentUser.name} </h1>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            ></button>
          </div>
          <p className="profile__info-profession"> {currentUser.about} </p>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
        >
          <img className="profile__plus-img" src={Plus} alt="Кнопка" />
        </button>
      </section>
      <section className="elements">
        <ul className="element">
          {cards.map((card, i) => (
            <li className="element__card" key={card._id}>
              <Card 
              element={card} 
              onCardOpen={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete} />
            </li> 
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
