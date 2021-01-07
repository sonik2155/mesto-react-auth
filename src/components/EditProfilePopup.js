import React from "react";
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [info, setDescription] = React.useState("");
 
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: info,
    });
  } 

    return (
            <PopupWithForm  name="profile"
            isOpen={props.isOpen}
            title="Редактировать профиль"
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonTitle="Сохранить">
              <label className="popup__label">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Жак-Ив Кусто"
                  value={name}
                  autoComplete="off"
                  minLength="2"
                  maxLength="40"
                  required
                  onChange={handleNameChange}
                  className="popup__form popup__form_name_call"
                />
                <span className="popup__error_visible" id="name-error"></span>
              </label>
              <label className="popup__label">
                <input
                  name="info"
                  id="text"
                  type="text"
                  placeholder="Исследователь океана"
                  value={info}
                  autoComplete="off"
                  minLength="2"
                  maxLength="200"
                  required
                  onChange={handleDescriptionChange}
                  className="popup__form popup__form_job"
                />
                <span className="popup__error_visible" id="text-error"></span>
              </label>
            </PopupWithForm>
          );
}

export default EditProfilePopup;