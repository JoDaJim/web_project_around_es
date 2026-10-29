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

const profileAddButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const newCardCloseButton = newCardModal.querySelector(".popup__close");
const newCardForm = newCardModal.querySelector("#new-card-form");
const newCardNameInput = newCardModal.querySelector(
  ".popup__input_type_card-name",
);
const newCardLinkInput = newCardModal.querySelector(".popup__input_type_url");

const cardElementTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

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

function getCardElement(
  name = "Sin titulo",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardElementTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});

profileAddButton.addEventListener("click", function () {
  openModal(newCardModal);
});
newCardCloseButton.addEventListener("click", function () {
  closeModal(newCardModal);
});
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardName = newCardNameInput.value;
  const newCardLink = newCardLinkInput.value;

  renderCard(newCardName, newCardLink, cardsList);

  closeModal(newCardModal);
}
newCardForm.addEventListener("submit", handleCardFormSubmit);
