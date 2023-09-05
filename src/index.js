let openedButton = null;

const smallBuildingDescription = 'Здание';
const stadiumDescription = 'Стадион';
const bridgeDescription = 'Мост';
const flatDescription = 'Квартиры';
const museumDescription = 'Музей';
const showroomDescription = 'Выставочный зал';
const administrationDescription = 'Администрация';
const office1Description = 'Офис 1';
const office2Description = 'Офис 2';
const apartmentsDescription = 'Апартаменты';

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
    const office1 = target.classList.contains('button_variant_office1');
    const office2 = target.classList.contains('button_variant_office2');
    const apartments = target.classList.contains('button_variant_apartments');

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

    if (office1) {
      openButton(target, office1Description);
      openedButton = target;
    }

    if (office2) {
      openButton(target, office2Description);
      openedButton = target;
    }

    if (apartments) {
      openButton(target, apartmentsDescription);
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
