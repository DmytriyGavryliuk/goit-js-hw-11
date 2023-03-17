 export default class CreateUrl {
constructor() {
    this.page = 1;
    this.refs = this.getRefs();
    this.searchQuery = '';
    this.API_KEY = '34446283-3d40fefb592ada7459bfc2d6a';
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  getRefs() {
    const refs = {};
    refs.searchForm = document.querySelector('.search-form');
    return refs;
  }

  getUrl() {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
    return url;
  }

  getQuery() {
    this.searchQuery = this.refs.searchForm.searchQuery.value.trim();
  }

  incrementPage() {
    this.page += 1;
  }

  clearPageValue() {
    this.page = 1;
  }
}
