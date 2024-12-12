const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (
    formEl.elements.email.value.trimLeft().trimRight() == '' ||
    formEl.elements.password.value.trimLeft().trimRight() == ''
  ) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      [formEl.elements.email.name]: formEl.elements.email.value.trimLeft().trimRight(),
      [formEl.elements.password.name]: formEl.elements.password.value.trimLeft().trimRight(),
    };
    console.log(formData);
    formEl.reset();
  }
});
