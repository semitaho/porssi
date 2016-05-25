import './card.css';
import template from './card.html';

const Card = {
  template,
  bindings: {
    item: '<'
  },
  controller: function() {

    this.sendMessage = function () {
      console.log('heihei');
      FB.ui({
        method: 'send',
        link: 'http://www.pesis.fi',
        to: '527189480',
        message: 'tuu mukaan treeneihin'
      });
    };
  }
};
export default Card;