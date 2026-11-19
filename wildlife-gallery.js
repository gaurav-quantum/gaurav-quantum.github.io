(() => {
  const section = document.getElementById('wildlife');
  if (!section || !Array.isArray(window.wildlifePhotos)) return;
  const photos = window.wildlifePhotos;
  const filters = section.querySelector('.wildlife-filters');
  const grid = section.querySelector('.wildlife-grid');
  const status = section.querySelector('.wildlife-status');
  const empty = section.querySelector('.wildlife-empty');
  const dialog = section.querySelector('.wildlife-dialog');
  const categories = [['all', 'All photos'], ['squirrels', 'Squirrels'], ['bugs', 'Bugs'], ['animals', 'Animals'], ['birds', 'Birds'], ['fishes', 'Fishes']];
  let opener;

  function openPhoto(photo, button) {
    opener = button;
    const image = dialog.querySelector('img');
    image.src = photo.src;
    image.alt = photo.alt;
    dialog.querySelector('h3').textContent = photo.title;
    const caption = dialog.querySelector('.wildlife-view-caption');
    caption.textContent = photo.caption || '';
    caption.hidden = !photo.caption?.trim();
    dialog.showModal();
    document.body.classList.add('wildlife-view-open');
  }

  function render(category) {
    const selected = photos.filter(photo => category === 'all' || photo.category === category);
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    const fragment = document.createDocumentFragment();
    selected.forEach(photo => {
      const card = document.createElement('figure');
      card.className = 'wildlife-card';
      const button = document.createElement('button');
      button.className = 'wildlife-photo';
      button.type = 'button';
      button.setAttribute('aria-label', `Enlarge photograph: ${photo.alt}`);
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      button.append(image);
      button.addEventListener('click', () => openPhoto(photo, button));
      const info = document.createElement('figcaption');
      const title = document.createElement('h3');
      title.textContent = photo.title;
      info.append(title);
      if (photo.caption?.trim()) {
        const caption = document.createElement('p');
        caption.className = 'wildlife-caption';
        caption.textContent = photo.caption;
        info.append(caption);
      }
      card.append(button, info);
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
    empty.hidden = selected.length !== 0;
    const label = categories.find(([id]) => id === category)[1];
    status.textContent = `${selected.length} ${selected.length === 1 ? 'photograph' : 'photographs'}${category === 'all' ? '' : ' · ' + label} · Select a photo to view it larger.`;
  }

  categories.forEach(([id, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.category = id;
    button.setAttribute('aria-controls', 'wildlife-gallery');
    button.append(document.createTextNode(label));
    const count = document.createElement('span');
    count.textContent = photos.filter(photo => id === 'all' || photo.category === id).length;
    button.append(count);
    button.addEventListener('click', () => render(id));
    filters.append(button);
  });
  filters.hidden = false;
  dialog.querySelector('.wildlife-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('wildlife-view-open');
    opener?.focus();
  });
  render('all');
})();
