const ulCategories = document.querySelector('#categories');
let count = 0;
[...ulCategories.children].forEach(() => {
  count++;
});
console.log(`Number of categories: ${count}`);
const categoriesItem = document.querySelectorAll('.item');
[...categoriesItem].forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
