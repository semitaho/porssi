class TeamModel {

  constructor(persistence) {
    this.teams = [];
    this.persistence = persistence;
  }

  resolveTeams(userid) {
    return this.persistence.readAll('team', {})
      .then(data=> {
        console.log('result', data);
        this.teams = data;
        return this.teams;
      });
  }

  serialize(uiplayer, dbplayer) {
    angular.copy(uiplayer, dbplayer);
    for (let key in dbplayer) {
      if (key.indexOf('$$') > -1) {
        delete dbplayer[key];
      }
    }
    delete dbplayer.editing;
  }


}
export default TeamModel;