import React from "react";
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleCallChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onAddPlace({
      name: name,
      link: link,
    });
  } 

    return (
        <PopupWithForm
        name="add"
        isOpen={props.isOpen}
        title="Новое место"
        onClose={props.onClose}
        onSubmit={handleSubmit}
        buttonTitle="Создать">
        <label className="popup__label">
          <input
            name="call"
            id="nickname"
            type="text"
            required
            onChange={handleCallChange}
            autoComplete="off"
            minLength="1"
            maxLength="30"
            value={name}
            placeholder="Название"
            className="popup__form popup__form_name_title"
          />
          <span className="popup__error_visible" id="nickname-error"></span>
        </label>
        <label className="popup__label">
          <input
            name="link"
            id="url"
            type="url"
            required
            value={link}
            onChange={handleLinkChange}
            autoComplete="off"
            placeholder="Ссылка на картинку"
            className="popup__form popup__form_pic_url"
          />
          <span className="popup__error_visible" id="url-error"></span>
        </label>
      </PopupWithForm>
    )
} 

export default AddPlacePopup; 