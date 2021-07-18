import * as basicLightbox from 'basiclightbox';
import refs from './refs.js';

refs.galleryUl.addEventListener('click', openLargeImage);

function openLargeImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`).show();
  instance.show();
}
