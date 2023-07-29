const formSelector = '.popup__form';
const inputSelector = '.popup__input';
const submitButtonSelector = '.popup__save-button';
const inactiveButtonClass = 'popup__save-button_disabled';
const inputErrorClass = 'popup__input_type_error';
const errorClass = 'popup__input-error_visible';
export const formSelectors = {
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
};

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');
export const profileElements = {
  name: profileName,
  job: profileJob,
};

function handleOpenForm() {
    formValidators[this.formName].hideErrors();
    formValidators[this.formName].disableButtonState();
  }

  const profileEditPopup = new PopupWithForm(profileEditPopupSelector, data => {
    profileEditPopup.blockSubmitButton();
  
const config = {
  popupForm : '.popup__form',
  inputErrorClass : 'form__input_type_error',
  inputErrorActive : 'form__input-error_active',
  formInput : '.form__input',
  formSubmit : '.form__submit',
};

export {popupEditProfile, profileEditBtn, formEditProfile, nameInput, jobInput, formAddNewCard,
  popupAddNewCardOpenBtn, popupAddNewCard, config, buttonEditAvatar, formEditAvatar,
avatar};

function fillInEditProfileFormInputs({ username, job }) {
  nameInput.value = username;
  jobInput.value = job;
}

const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();
buttonEditAvatar.addEventListener('click', () => {
  formEditAvatarValidator.toggleButtonState();
  editAvatarPopup.open();
});
profileEditBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillInEditProfileFormInputs({
    username: info.username,
    job: info.job
  });
  editProfilePopup.open();
});

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escapeClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escapeClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
  }
}

export default class UserInfo {
  constructor({ username, job,}) {
    this._username = document.querySelector(username);
    this._job = document.querySelector(job);
  }

  getUserInfo() {
    const userInfo = {
      username: this._username.textContent,
      job: this._job.textContent,
    }

    return userInfo;
  }

  setUserInfo(data) {
    this._username.textContent = data.name;
    this._job.textContent = data.about;
  }
}

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');
    this._submitBtn = this._popupForm.querySelector('.form__submit');
    this._submitBtnText = this._submitBtn.textContent;
  }