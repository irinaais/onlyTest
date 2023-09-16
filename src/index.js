const buildingsDescriptions = {
    'small-building': 'Здание',
    stadium: 'Стадион',
    bridge: 'Мост',
    flat: 'Квартиры',
    museum: 'Музей',
    showroom: 'Выставочный зал',
    administration: 'Администрация',
    office1: 'Офис 1',
    office2: 'Офис 2',
    apartments: 'Апартаменты'
}

const buttonPrefix = 'button_variant_';

let openedButton = null;

document.addEventListener('click', (evt) => {
  if (openedButton === null) {
    const target = evt.target;
    const button = target.closest('.button');

    if (button != null) {
      const arr = Array.from(button.classList);

      const buttonClassVariant = arr.find(i => i.startsWith(buttonPrefix));
      const variant = buttonClassVariant.slice(buttonPrefix.length);
      const description = buildingsDescriptions[variant];

      openButton(button, description);
    }
  } else {
    closeButton(openedButton);
    openedButton = null;
  }
})

function openButton(button, textOfSpan) {
  const img = button.querySelector('img');
  img.src = '../src/images/minus.svg';
  img.alt = 'закрыть описание';
  const span = button.querySelector('span');
  span.textContent = textOfSpan;
  span.classList.add('button__description_open');
  openedButton = button;
}

function closeButton(openedButton) {
  const img = openedButton.querySelector('img');
  img.src = '../src/images/plus.svg';
  img.alt = 'открыть описание';
  const span = openedButton.querySelector('span');
  span.textContent = '';
  span.classList.remove('button__description_open');
}
