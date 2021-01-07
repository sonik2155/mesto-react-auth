function ImagePopup(props) {
  return (
    <>
      <div
        className={`popup popup_add_image ${props.isOpen && "popup_is-opened"}`}
      >
        <figure className="popup__case">
          <img
            className="popup__pic"
            src={props.card.link}
            alt={props.card.name}
          />
          <button
            type="button"
            onClick={props.onClose}
            className="popup__close-button"
          ></button>
          <h3 className="popup__name-pic"> {props.card.name} </h3>
        </figure>
      </div>
    </>
  );
}

export default ImagePopup;
