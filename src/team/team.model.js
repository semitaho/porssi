class TeamModel {

  constructor() {
    this.teams = [];
  }

  resolveTeams(userid) {
    this.teams.push({team: 'Puurtilan kisa-pojat', laji: 'Pesäpallo', players: [{name: 'Pasi'}]});
    this.teams.push({team: 'Vuosaaren viikingit', laji: 'Jääkiekko', players: [{name: 'Teme'}]});
    return this.teams;

  }


}
export default TeamModel;