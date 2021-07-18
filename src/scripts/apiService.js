import { error } from './notification.js';
export default {
    page: 1,
    search: '',
    perPage: 12,
    APIkey: '22450906-3e002c9d2b529a68e38cedb68',
    baseURL: "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q",
    async getResourse() {
        try {
            const responce = await fetch(`${this.baseURL}=${this.search}
      &page=${this.page}&perPage=${this.perPage}&key=${this.APIkey}`);
            this.page += 1;

            return await responce.json();
        }
        catch (err) {
            throw error({
                text: (`Ошибка по ${this.search} статус${this.status}`),
                hide: true,
                delay: 3000,
            });

        }
    },
    resetPage() {
        this.page = 1;
    },

};