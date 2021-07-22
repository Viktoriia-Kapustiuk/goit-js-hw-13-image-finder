import './sass/main.scss';
import apiService from './scripts/apiService';
import refs from './scripts/refs';
import createGallery from './templates/create-gallery.hbs';
import {alert} from './scripts/notification.js';
import modal from './scripts/modalLightBox';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

var debounce = require('lodash.debounce');

const imgSearcher = new apiService();

function galleryRender(element) {
    refs.galleryUl.insertAdjacentHTML('beforeend', createGallery(element));
  refs.loadMore.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});}

function addPics() {
    imgSearcher.getResourse().then(galleryRender);

}

function clearPage() {
    refs.galleryUl.innerHTML = "";
}

function error() {
    alert({
        text: 'Запрос выполнен с ошибкой. Повторите свой запрос',
        hide: true,
        delay: 3000,
    })
}


function fetchImg(event) {
    event.preventDefault();
    clearPage();
    imgSearcher.search = event.target.value;
    if (imgSearcher.search === "") {
        clearPage();
        alert({text: 'Уточните ваш запрос'})
    } else {
        imgSearcher.getResourse().then(galleryRender).catch(error);
    }
    imgSearcher.resetPage();
}
refs.searchForm.addEventListener('input', debounce(fetchImg, 1000));

refs.loadMore.addEventListener('click', addPics);