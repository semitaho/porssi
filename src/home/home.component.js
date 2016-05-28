import template from './home.html';
import './home.css';

const homeComponent = {
  template,
  bindings: {
    usermodel: '<'
  },
  replace: true
};

export default homeComponent;