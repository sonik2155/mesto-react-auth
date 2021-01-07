import React from "react";
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  const avatarRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

    return (
        <PopupWithForm  name="avatar"
        isOpen={props.isOpen}
        title="Обновить аватар"
        onClose={props.onClose}
        onSubmit={handleSubmit}
        buttonTitle="Сохранить">
    <label className="popup__label">
      <input
        name="picture"
        type="url"
        id="link"
        ref={avatarRef}
        required
        placeholder="https://images.unsplash.com/photo-1599937749121-6d2b5063ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        autoComplete="off"
        className="popup__form popup__apdate_picture"
      />
    </label>
  </PopupWithForm>
    )
}

export default EditAvatarPopup;