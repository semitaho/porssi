import template from './home.html';
import './home.css';

const homeComponent = {
  template,
  bindings: {
    userData: '<'
  },
  replace: true,
  controller: function (facebookModel) {
    console.log('model', facebookModel);
    this.profilepic = facebookModel.data.picture.data.url;
  }
};

export default homeComponent;