import './preloader.css';
import template from './preloader.html';

const preloaderComponent = {
  template,
  controller: function(preloaderModel){
    this.model = preloaderModel;
  }

};

export default preloaderComponent;