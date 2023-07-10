import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)

    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)

    }

    function handleCardClick (data){

        setSelectedCard(data)
        setIsImagePopupOpen(true)
    }


    function closeAllPopups(){
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard(null);
    }

  return (
      <div className="root">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          {/* The Modal for edit profile*/}
          <PopupWithForm name='edit' title='Редактировать профиль' save_button='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input id="name" type="text" name="name" className="form__input form__input_type_name" required
                   minLength="2" maxLength="40" />
              <span className="form__input-error" id="name-error"/>
              <input id="about" type="text" name="about" className="form__input form__input_type_about" required
                     minLength="2" maxLength="200" />
                <span className="form__input-error" id="about-error"/>
          </PopupWithForm>

          {/* The Modal ends */}
          {/* The Modal for edit profile*/}
          <PopupWithForm name='edit-avatar' title='Обновить аватар' save_button='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input
                    id="avatar_link"
                    type="url"
                    name="avatar"
                    className="form__input form__input_type_avatar-link"
                    placeholder="Ссылка на аватар"
                    required=""
                />
                <span className="form__input-error" id="avatar_link-error" />

        </PopupWithForm>
          {/* The Modal ends */}
          {/* The Modal for add new card*/}
          <PopupWithForm name='add' title='Новое место' save_button='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input
                    id="place_name"
                    type="text"
                    name="name"
                    className="form__input form__input_type_placename"
                    placeholder="Название"
                    required=""
                    minLength={2}
                    maxLength={30}
                />
                <span className="form__input-error" id="place_name-error" />
                <input
                    id="link"
                    type="url"
                    name="link"
                    className="form__input form__input_type_link"
                    placeholder="Ссылка на картинку"
                    required=""
                />
                <span className="form__input-error" id="link-error" />

          </PopupWithForm>

          {/* The Modal ends */}
          {/* The Modal for photo*/}
          <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
          {/* The Modal ends */}
          {/* The Modal for delete*/}
            <PopupWithForm name='delete' title='Вы уверены?' save_button='Да'  onClose={closeAllPopups}/>
          <div id="modal_delete" className="modal modal_type_delete">
            <div className="modal__form">
              <button className="modal__close" type="button" />
              <form className="form form_delete" name="add_delete">
                <h3 className="form__question">Вы уверены?</h3>
                <button type="submit" className="form__submit-button">
                  Да
                </button>
              </form>
            </div>
          </div>
          {/* The Modal ends */}
        </div>
        <template className="element_template" />
      </div>

  );
}

export default App;
