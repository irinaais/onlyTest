let openedButton = null;

window.addEventListener('click', (evt) => {
  if (openedButton === null) {
    let target = evt.target;

    const smallBuilding = target.classList.contains('button_variant_small-building');

    if (smallBuilding) {
      const img = target.querySelector('img');
      img.src = '../src/images/minus.svg';
      img.alt = 'закрыть описание';
      const span = target.querySelector('span');
      span.textContent = 'Здание';
      span.classList.add('button__description_open');

      openedButton = target;
    }
  } else {
    const img = openedButton.querySelector('img');
    img.src = '../src/images/plus.svg';
    img.alt = 'открыть описание';
    const span = openedButton.querySelector('span');
    span.textContent = '';
    span.classList.remove('button__description_open');

    openedButton = null;
  }

})
