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


}
export default TeamModel;