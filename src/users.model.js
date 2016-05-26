export default function UsersModel() {
  var self = this;
  self.users = [{
    userid: 527189480,
    imgsrc: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/521759_10151510974179481_904784480_n.jpg?oh=69a4879f033c0d3ce5fd8dbcd6e3b457&oe=5799FF26',
    name: 'Toni Aho',
    lajit: ['baseball', 'icehockey', 'soccer'],
    asked: 2
  }, {
    userid: 635275414,
    name: 'Timo Aho',
    lajit: ['baseball', 'salibandy', 'pyöräily'],
    imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/293251_10151116551645415_440595073_n.jpg?oh=5222cfe628a737f47d445aaff59ca23b&oe=57C8FF57',
    asked: 3
  }, {
    userid: 739635205,
    name: 'Kaisu Piiroinen',
    lajit: ['basketball'],
    imgsrc: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-0/p206x206/10580205_10154696179920206_2081127511127165707_n.jpg?oh=819ed68137d96a155c4957f43bfd223b&oe=57D35B8B',
    asked: 1
  }];


  self.addAsked = function (user) {
    console.log('user', user);
    user.asked += 1;
  };

}
