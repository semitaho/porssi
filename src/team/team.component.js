import template from './team.html';
const teamComponent = {
  template,
  replace: true,
  bindings: {
    model: '<'
  },
  controller: function (koodisto, persistence) {

    this.tabSelected = null;
    this.adding = false;
    this.koodisto = koodisto;

    this.addNew = function () {
      this.adding = true;
    };

    this.lisaa = function (team) {
      team.players.push(this.uusirivi);
      this.uusirivi = null;
      persistence.store(team, 'team').then(() => {
        console.log('all done');
        this.adding = false;


      });

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

    this.edit = function (player, index) {
      this.editing = angular.copy(player);
      this.editing.$$index = index;
      console.log('editing', this.editing);

    };

    this.isEditing = function (index) {
      return this.editing && this.editing.$$index === index;

    };

    this.editDone = function (team, player) {
      this.model.serialize(this.editing, player);
      console.log('team', team);

      persistence.store(team, 'team').then(() => {
        console.log('all done');
        delete this.editing;
      });

    };

    this.isEditDoneDisabled = function (player) {
      if ($.isEmptyObject(player.name) || $.isEmptyObject(player.pelipaikka)) {
        return true;
      }
      return false;
    };
    this.editCancel = function () {
      this.editing = null;
    };

    this.selectTab = function (tab) {
      this.tabSelected = tab;

    };

    this.$onInit = function () {
      this.tabSelected = this.model.teams[0];
    };
    this.month = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu',
      'Lokakuu', 'Marraskuu', 'Joulukuu'];

    this.monthShort = ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syys', 'Loka', 'Mar', 'Jou'];
    this.weekdaysLetter = ['S', 'M', 'T', 'K', 'T', 'P', 'L'];
    this.weekdays = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];


  }
};

export default teamComponent;
