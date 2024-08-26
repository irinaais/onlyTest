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
  const target = evt.target;
  const button = target.closest('.button');

  if ((button === null) && (openedButton !== null)) closeButton(openedButton);

  if (button != null) {
    // Если нажата та же кнопка, что уже открыта - закрываем ее
    if (button === openedButton) {
      closeButton(openedButton);
      openedButton = null;
      return;  // Прерываем выполнение, чтобы не открывать кнопку снова
    }

    // Если есть другая открытая кнопка, закрываем ее
    if (openedButton !== null) {
      closeButton(openedButton);
    }

    // Открываем новую кнопку
    const arr = Array.from(button.classList);
    const buttonClassVariant = arr.find(i => i.startsWith(buttonPrefix));
    const variant = buttonClassVariant.slice(buttonPrefix.length);
    const description = buildingsDescriptions[variant];

    openButton(button, description);
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
