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


export const profileEditButton = document.querySelector('.profile__button_type_edit');
export const profileEditPopupSelector = '.popup_type_edit-profile';
const profileEditPopupElement = document.querySelector(profileEditPopupSelector);
export const profileNameInput = profileEditPopupElement.querySelector('.popup__input_type_name');
export const profileJobInput = profileEditPopupElement.querySelector('.popup__input_type_job');

function handleOpenForm() {
    formValidators[this.formName].hideErrors();
    formValidators[this.formName].disableButtonState();
  }

  const profileEditPopup = new PopupWithForm(profileEditPopupSelector, data => {
    profileEditPopup.blockSubmitButton();
  
    api.setUserInfo(data)
      .then(res => {
        userInfo.fill(res);
        userInfo.renderName();
        userInfo.renderJob();
        profileEditPopup.close();
      })
      .catch(err => console.error(err))
      .finally(() => {
        profileEditPopup.unblockSubmitButton();
      });
  }, handleOpenForm);

  profileEditPopup.setEventListeners();

profileEditButton.addEventListener('click', function () {
  ({
    name: profileNameInput.value,
    job: profileJobInput.value
  } = userInfo.getUserInfo());
  profileEditPopup.open();
  profileNameInput.dispatchEvent(new Event('input'));
  profileJobInput.dispatchEvent(new Event('input'));
});