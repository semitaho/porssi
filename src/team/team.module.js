import TeamComponent from './team.component.js';
import TeamModel from './team.model.js';
import './team.css';
const moduleName = 'porssi.team';
angular.module(moduleName, [])
  .component('team', TeamComponent)
  .service('teamModel', TeamModel);

export default moduleName;
