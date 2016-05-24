import template from './home.html';
import './home.css';

const homeComponent = {
  template,
  bindings: {
    userData: '<'
  },
  replace: true,
  controller: function () {
    this.cards = [{
      imgsrc: this.userData.picture.data.url,
      name: this.userData.name,
      lajit: ['baseball', 'icehockey', 'soccer']
    }, {
      name: 'Timo Aho',
      lajit: ['baseball', 'salibandy', 'pyöräily'],
      imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/293251_10151116551645415_440595073_n.jpg?oh=5222cfe628a737f47d445aaff59ca23b&oe=57C8FF57'
    }, {
      name: 'Kaisu Piiroinen',
      lajit: ['basketball'],
      imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-0/p206x206/10580205_10154696179920206_2081127511127165707_n.jpg?oh=819ed68137d96a155c4957f43bfd223b&oe=57D35B8B'
    }];
    console.log('cards', this.cards);
  }
};

export default homeComponent;