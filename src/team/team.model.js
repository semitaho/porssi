class TeamModel {

  constructor() {
    this.teams = [];
  }

  resolveTeams(userid) {
    this.teams.push({
      icon: 'mdi-maps-place',
      team: 'Puurtilan kisa-pojat',
      laji: 'Pesäpallo',
      players: [{name: 'Pasi', pelipaikka: 'goalie'}]
    });
    this.teams.push({icon: 'mdi-maps-place', team: 'Vuosaaren viikingit', laji: 'Jääkiekko', players: [{name: 'Teme'}]});
    return this.teams;

  }


}
export default TeamModel;