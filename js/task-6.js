function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputField = document.querySelector('input');

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');
let templateSaver = '';
// console.log(buttonCreate);
// console.log(buttonDestroy);
buttonCreate.addEventListener('click', () => {
  let numberSaver = parseInt(inputField.value);
  templateSaver = '';
  if (numberSaver > 0 && numberSaver < 101) {
    for (let index = 1; index <= numberSaver; index++) {
      let boxesSize = 30 + index * 10;
      let randomColor = getRandomHexColor();

      templateSaver += `   <div style="background-color: ${randomColor}; width: ${boxesSize}px; height: ${boxesSize}px;"></div>`;
    }
  }
  inputField.value = '';
  container.innerHTML = templateSaver;
});
buttonDestroy.addEventListener('click', () => {
  templateSaver = '';
  container.innerHTML = templateSaver;
});
