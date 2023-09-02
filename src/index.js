const template = document.querySelector('#template');

window.addEventListener('click', (evt) => {
  let target = evt.target;

  const smallBuilding = target.classList.contains('button_variant_small-building');
  const smallBuildingOpened = target.classList.contains('button-opened_variant_small-building');

  if (smallBuilding) {
    const templateItem = template.content.cloneNode(true);
    const div = templateItem.querySelector('div');
    div.classList.add('button-opened_color_blue','button-opened_variant_small-building');
    const span = templateItem.querySelector('span');
    span.textContent = 'Здание';

    target.replaceWith(templateItem);
  }

  if (smallBuildingOpened) {
    const div = document.createElement('div');
    div.classList.add('button', 'button_type_plus', 'button_color_blue', 'button_variant_small-building');
    target.replaceWith(div);
  }

})
