const routeConfig = ($routeProvider) => {
  $routeProvider.when('/', {
    template: '<home usermodel="$resolve.usermodel"></home>',
    resolve: {
      usermodel: function (usersModel) {
        return usersModel;
      }
    }
  }).when('/team', {
    template: '<team model="$resolve.model" />',
    resolve: {
      model: function (teamModel) {
        teamModel.resolveTeams('plaah');
        return teamModel;
      }
    }
  });
};
export default routeConfig;