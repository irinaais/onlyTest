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

document.addEventListener('click', (evt) => {
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

    const plusImg = target.classList.contains('img_type_plus');

    if (smallBuilding) {
      openButton(target, smallBuildingDescription);
    }

    if (stadium) {
      openButton(target, stadiumDescription);
    }

    if (bridge) {
      openButton(target, bridgeDescription);
    }

    if (flat) {
      openButton(target, flatDescription);
    }

    if (museum) {
      openButton(target, museumDescription);
    }

    if (showroom) {
      openButton(target, showroomDescription);
    }

    if (administration) {
      openButton(target, administrationDescription);
    }

    if (office1) {
      openButton(target, office1Description);
    }

    if (office2) {
      openButton(target, office2Description);
    }

    if (apartments) {
      openButton(target, apartmentsDescription);
    }

    if (plusImg) {
      if (target.parentNode.classList.contains('button_variant_small-building')) {
        openButton(target.parentNode, smallBuildingDescription);
      }

      if (target.parentNode.classList.contains('button_variant_stadium')) {
        openButton(target.parentNode, stadiumDescription);
      }

      if (target.parentNode.classList.contains('button_variant_bridge')) {
        openButton(target.parentNode, bridgeDescription);
      }

      if (target.parentNode.classList.contains('button_variant_flat')) {
        openButton(target.parentNode, flatDescription);
      }

      if (target.parentNode.classList.contains('button_variant_museum')) {
        openButton(target.parentNode, museumDescription);
      }

      if (target.parentNode.classList.contains('button_variant_showroom')) {
        openButton(target.parentNode, showroomDescription);
      }

      if (target.parentNode.classList.contains('button_variant_administration')) {
        openButton(target.parentNode, administrationDescription);
      }

      if (target.parentNode.classList.contains('button_variant_office1')) {
        openButton(target.parentNode, office1Description);
      }

      if (target.parentNode.classList.contains('button_variant_office2')) {
        openButton(target.parentNode, office2Description);
      }

      if (target.parentNode.classList.contains('button_variant_apartments')) {
        openButton(target.parentNode, apartmentsDescription);
      }
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
  openedButton = target;
}

function closeButton(openedButton) {
  const img = openedButton.querySelector('img');
  img.src = '../src/images/plus.svg';
  img.alt = 'открыть описание';
  const span = openedButton.querySelector('span');
  span.textContent = '';
  span.classList.remove('button__description_open');
}
