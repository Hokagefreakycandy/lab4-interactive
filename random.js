//* .nexr-btn also
function disableButton(randomBtn) {
    const button = document.getElementByClassName("pre-btn");
    if (button) {
      button.disabled = true;
    }
  }
  
  const button = document.querySelector(`.pre-btn`);
  const disableButton = () => {
    button.disabled = true;
  };
  button.addEventListener(`click`,disableButton);
  