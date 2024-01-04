export default function validateForm(formID, inputSelector) {
  const form = document.getElementById(formID);
  const inputs = form.querySelectorAll(inputSelector);

  let isValid = true;

  inputs.forEach((input) => {
    if (!input.validity.valid) {
      isValid = false;
    }
  });

  return isValid;
}
