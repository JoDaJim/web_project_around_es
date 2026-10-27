const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (card) {
  console.log(card.name);
});

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-popup");
const profileEditCloseButton = profileEditModal.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = profileEditModal.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = profileEditModal.querySelector(
  ".popup__input_type_description",
);

const profileEditForm = profileEditModal.querySelector("#edit-profile-form");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

profileEditButton.addEventListener("click", function () {
  handleOpenEditModal();
});

profileEditCloseButton.addEventListener("click", function () {
  closeModal(profileEditModal);
});

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(profileEditModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const newUserName = profileNameInput.value;
  const newUserDescription = profileDescriptionInput.value;

  profileTitle.textContent = newUserName;
  profileDescription.textContent = newUserDescription;
  closeModal(profileEditModal);
}
profileEditForm.addEventListener("submit", handleProfileFormSubmit);
