import template from './team.html';
const teamComponent = {
  template,
  replace: true,
  bindings: {
    model: '<'
  },
  controller: function (koodisto) {
    this.tabSelected = null;
    this.adding = false;
    this.koodisto = koodisto;

    this.addNew = function () {
      this.adding = true;
    };

    this.lisaa = function (team) {
      team.players.push(this.uusirivi);
      this.adding = false;
      this.uusirivi = null;

    };

    this.isLisaaDisabled = function () {
      if (!this.uusirivi) {
        return true;
      }
      if ($.isEmptyObject(this.uusirivi.name) || $.isEmptyObject(this.uusirivi.pelipaikka)) {
        return true;
      }

      return false;

    };

    this.cancel = function () {
      this.uusirivi = null;
      this.adding = false;
    };

    this.edit = function (player) {
      player.editing = true;
    };

    this.editDone = function(player){
      delete player.editing;
    }

    this.isEditDoneDisabled = function (player) {
      if ($.isEmptyObject(player.name) || $.isEmptyObject(player.pelipaikka)) {
        return true;
      }
      return false;
    };
    this.editCancel = function (player) {
      delete player.editing;
    };

    this.selectTab = function (tab) {
      this.tabSelected = tab;

    };

    this.$onInit = function () {
      this.tabSelected = this.model.teams[0];
    };


  }
};

export default teamComponent;
