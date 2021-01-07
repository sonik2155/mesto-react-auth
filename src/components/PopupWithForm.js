import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_type_${props.name} ${
          props.isOpen && "popup_is-opened"
        }`}
      >
        <form
          name="popup__form"
          method="POST"
          action="#"
          className="popup__container"
          noValidate
          onSubmit={props.onSubmit}
        >
          <h2 className="popup__title"> {props.title} </h2> {props.children}
          <button
            type="button"
            onClick={props.onClose}
            className="popup__close-button"
          ></button>
          <button
            type="submit"
            className="popup__button"
          >
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
