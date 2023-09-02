let openedButton = null;

//TODO вынести в отдельный файл
const smallBuildingDescription = 'Здание';
const stadiumDescription = 'Стадион';

window.addEventListener('click', (evt) => {
  if (openedButton === null) {
    let target = evt.target;

    const smallBuilding = target.classList.contains('button_variant_small-building');
    const stadium = target.classList.contains('button_variant_stadium');

    if (smallBuilding) {
      openButton(target, smallBuildingDescription);
      openedButton = target;
    }

    if (stadium) {
      openButton(target, stadiumDescription);
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

function openButton(target, textOfSpan) {
  const img = target.querySelector('img');
  img.src = '../src/images/minus.svg';
  img.alt = 'закрыть описание';
  const span = target.querySelector('span');
  span.textContent = textOfSpan;
  span.classList.add('button__description_open');
}
