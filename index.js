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
};

const buttonPrefix = 'button_variant_';
let openedButton = null;

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const button = target.closest('.button');

  if (!button) {
    // Если клик был не по кнопке и есть открытая кнопка - закрываем ее
    if (openedButton) closeButton(openedButton);
    return;
  }

  // Если нажата та же кнопка, что уже открыта - закрываем её
  if (button === openedButton) {
    closeButton(openedButton);
    openedButton = null;
    return;
  }

  // Закрываем предыдущую открытую кнопку, если она существует
  if (openedButton) closeButton(openedButton);

  // Открываем новую кнопку
  const variant = getButtonVariant(button);
  const description = buildingsDescriptions[variant];
  openButton(button, description);
});

function getButtonVariant(button) {
  const buttonClassVariant = Array.from(button.classList)
    .find(i => i.startsWith(buttonPrefix));
  return buttonClassVariant.slice(buttonPrefix.length);
}

function openButton(button, textOfSpan) {
  const { img, span } = getButtonElements(button);
  img.src = '../src/images/minus.svg';
  img.alt = 'закрыть описание';
  span.textContent = textOfSpan;
  span.classList.add('button__description_open');
  openedButton = button;
}

function closeButton(button) {
  const { img, span } = getButtonElements(button);
  img.src = '../src/images/plus.svg';
  img.alt = 'открыть описание';
  span.textContent = '';
  span.classList.remove('button__description_open');
}

function getButtonElements(button) {
  const img = button.querySelector('img');
  const span = button.querySelector('span');
  return { img, span };
}
