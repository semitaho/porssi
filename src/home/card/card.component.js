import template from './card.html';
const Card = {
  template,
  bindings: {
    item: '<'
  }, controller: function() {
    console.log('this',this.item);
  }
};
export default Card;