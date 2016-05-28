import template from './team.html';
const teamComponent = {
  template,
  replace: true,
  bindings: {
    model: '<'
  },
  controller: function () {
    this.tabSelected = null;

    this.selectTab = function (tab) {
      this.tabSelected = tab;

    };

    this.$onInit = function () {
      this.tabSelected = this.model.teams[0];
    };

  }
};

export default teamComponent;
