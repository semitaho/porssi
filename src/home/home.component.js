import template from './home.html';
import './home.css';

var homeComponent = {
  template,
  bindings: {
    usermodel: '<'
  },
  replace: true
};

export default homeComponent;