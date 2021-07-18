import liItemTPL from '../templates/create-gallery.hbs';
import refs from './refs.js';

function updateLiItemMarkup(data) {

    const markup = liItemTPL(data);
    refs.galleryUl.insertAdjacentHTML('beforeend', markup);

    showBtnLoadMore();
}

function showBtnLoadMore() {
    refs.loadMore.classList.remove('not_visible');
}

function hideBtnLoadMore() {
    refs.loadMore.classList.add('not_visible');
}

function cleanMarkupBefore() {
    refs.galleryUl.innerHTML = "";
}

function scrollPage(top, width) {
    window.scrollTo({
        top: top + window.pageYOffset,
        width: width + window.pageXOffset,
        behavior: "smooth",
    });
}

export {
    updateLiItemMarkup,
    cleanMarkupBefore,
    scrollPage,
    hideBtnLoadMore,
};