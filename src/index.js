let openedButton = null;

//TODO вынести в отдельный файл
const smallBuildingDescription = 'Здание';
const stadiumDescription = 'Стадион';
const bridgeDescription = 'Мост';
const flatDescription = 'Квартиры';
const museumDescription = 'Музей';
const showroomDescription = 'Выставочный зал';
const administrationDescription = 'Администрация';

window.addEventListener('click', (evt) => {
  if (openedButton === null) {
    let target = evt.target;

    const smallBuilding = target.classList.contains('button_variant_small-building');
    const stadium = target.classList.contains('button_variant_stadium');
    const bridge = target.classList.contains('button_variant_bridge');
    const flat = target.classList.contains('button_variant_flat');
    const museum = target.classList.contains('button_variant_museum');
    const showroom = target.classList.contains('button_variant_showroom');
    const administration = target.classList.contains('button_variant_administration');

    if (smallBuilding) {
      openButton(target, smallBuildingDescription);
      openedButton = target;
    }

    if (stadium) {
      openButton(target, stadiumDescription);
      openedButton = target;
    }

    if (bridge) {
      openButton(target, bridgeDescription);
      openedButton = target;
    }

    if (flat) {
      openButton(target, flatDescription);
      openedButton = target;
    }

    if (museum) {
      openButton(target, museumDescription);
      openedButton = target;
    }

    if (showroom) {
      openButton(target, showroomDescription);
      openedButton = target;
    }

    if (administration) {
      openButton(target, administrationDescription);
      openedButton = target;
    }

  } else {
    closeButton(openedButton);
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

function closeButton(openedButton) {
  const img = openedButton.querySelector('img');
  img.src = '../src/images/plus.svg';
  img.alt = 'открыть описание';
  const span = openedButton.querySelector('span');
  span.textContent = '';
  span.classList.remove('button__description_open');
}
