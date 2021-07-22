import { error } from './notification.js';
export default class apiService {
  constructor() {
    this.page = 1;
    this.value = '';
  }

  getResourse() {
    const APIkey = '22552385-48cbfc230869fd9c0db486b86';
    const baseURL = 'https://pixabay.com/api/';
    const workLink = `${baseURL}?image_type=photo&orientation=horizontal&q=${this.value}
        &page=${this.page}&per_page=12&key=${APIkey}`;
    return fetch(workLink)
      .then(r => {
        if (r.ok) {
          return r.json();
        }
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          error({
            text: 'Ошибка ввода, проверьте правильность ввода',
            hide: true,
            delay: 3000,
          });
        } else {
          this.addPage();
          return hits;
        }
      });
  }
  addPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get search() {
    return this.value;
  }

  set search(newValue) {
    this.value = newValue;
  }
}
