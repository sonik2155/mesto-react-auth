import React from "react";
import Trash from "../images/Trash.svg";
import like from "../images/like.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({element, onCardLike, onCardDelete, onCardOpen}) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const card = {
  link: element.link,
  name: element.name,
  _id: element._id,
  owner: element.owner,
  likes: element.likes
  }

  function handleClick() {
    onCardOpen(element);
  }
  
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
  ); 
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'element__like_active' : ''}`
  );

  function handleLikeClick() {
    onCardLike(element)
  };

  function handleDeleteClick() {
    onCardDelete(element)
  };

  return (
    <>
      <img
        className="element__pic"
        onClick={handleClick}
        src={element.link}
        alt={element.name}
      />
      <div className="element__container">
        <button type="button" onClick={handleDeleteClick} className={cardDeleteButtonClassName}>
          <img src={Trash} alt="Кнопка" />
        </button>
        <h2 className="element__title"> {element.name} </h2>
        <div className="element__like-zone">
          <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}>
            <img src={like} alt="Лайк" />
          </button>
          <span className="element__quantity-like">
            {element.likes.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
