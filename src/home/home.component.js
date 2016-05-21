import template from './home.html';
import './home.css';

const homeComponent = {
  template,
  bindings: {
    userData: '<'
  },
  replace: true,
  controller: function () {
    this.cards = [{imgsrc: this.userData.picture.data.url}];
    console.log('cards', this.cards);
  }
};

export default homeComponent;