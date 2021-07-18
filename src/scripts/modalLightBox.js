import * as basicLightbox from 'basiclightbox';
import refs from './refs.js';

refs.galleryUl.addEventListener('click', openLargeImage);

function openLargeImage(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const largeImageURL = event.target.dataset.source;
    _openMobalBasic(largeImageURL);
}

function _openMobalBasic(url) {
    basicLightbox.create(`<img src="${url}" width="1600" height="900">`).show();
}