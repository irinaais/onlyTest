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
    const target = evt.target;
    const button = target.closest('.button');

    if (button != null) {
      if (button.classList.contains('button_variant_small-building')) {
        openButton(button, smallBuildingDescription);
      }

      if (button.classList.contains('button_variant_stadium')) {
        openButton(button, stadiumDescription);
      }

      if (button.classList.contains('button_variant_bridge')) {
        openButton(button, bridgeDescription);
      }

      if (button.classList.contains('button_variant_flat')) {
        openButton(button, flatDescription);
      }

      if (button.classList.contains('button_variant_museum')) {
        openButton(button, museumDescription);
      }

      if (button.classList.contains('button_variant_showroom')) {
        openButton(button, showroomDescription);
      }

      if (button.classList.contains('button_variant_administration')) {
        openButton(button, administrationDescription);
      }

      if (button.classList.contains('button_variant_office1')) {
        openButton(button, office1Description);
      }

      if (button.classList.contains('button_variant_office2')) {
        openButton(button, office2Description);
      }

      if (button.classList.contains('button_variant_apartments')) {
        openButton(button, apartmentsDescription);
      }
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
