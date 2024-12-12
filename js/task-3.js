/* # */
const inputField = document.querySelector('#name-input');
const spanField = document.querySelector('#name-output');
inputField.addEventListener('input', () => {
  let textSaver = inputField.value.trimLeft().trimRight();
  if (textSaver == '') {
    spanField.textContent = 'Anonymus';
  } else {
    spanField.textContent = textSaver;
  }
});
