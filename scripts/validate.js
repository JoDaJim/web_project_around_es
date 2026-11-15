function showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add("popup__error_visible");
  errorElement.textContent = errorMessage;
  inputElement.classList.add("popup__input_type_error");
}

function hideInputError(inputElement) {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
  inputElement.classList.remove("popup__input_type_error");
}

function checkInputValidity(inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(inputElement);
  } else {
    showInputError(inputElement, inputElement.validationMessage);
  }
}

function toggleButtonState(inputList, buttonElement) {
  const hasInvalidInput = Array.from(inputList).some(
    (inputElement) => !inputElement.validity.valid,
  );
  buttonElement.disabled = hasInvalidInput;
  if (hasInvalidInput) {
    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.classList.remove("popup__button_disabled");
  }
}

export function setEventListeners() {
  const popupForms = document.querySelectorAll(".popup__form");
  popupForms.forEach((formElement) => {
    const inputs = formElement.querySelectorAll(".popup__input");
    const submitButton = formElement.querySelector(".popup__button");
    toggleButtonState(inputs, submitButton);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(inputElement);
        toggleButtonState(inputs, submitButton);
      });
    });
  });
}
