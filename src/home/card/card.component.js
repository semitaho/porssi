import './card.css';
import template from './card.html';

var Card = {
  template,
  bindings: {
    item: '<',
    onAsked: '&'
  },
  controller: function ($rootScope) {
    var self = this;
    self.adding = false;


    this.sendMessage = (userid) => {
      FB.ui({
        method: 'send',
        link: 'http://www.pesis.fi',
        redirect_uri: 'http://www.yle.fi',
        to: userid,
        message: 'tuu mukaan treeneihin'
      }, success => {
        if (success) {
          $rootScope.$apply(self.onAsked);
        }
      });

    };
  }
};
export default Card;