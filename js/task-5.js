function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const bodyColor = document.body;
buttonColor.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
console.log(getRandomHexColor());
console.dir(bodyColor);
