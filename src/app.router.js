const routeConfig = ($routeProvider) => {

  const globalResolvers = {
    facebookmodel: function (facebookModel) {
      return facebookModel.resolveUserdata();

    }
  };
  $routeProvider.when('/', {
    template: '<home usermodel="$resolve.usermodel"></home>',
    resolve: angular.extend(globalResolvers, {
      usermodel: function (usersModel) {
        return usersModel;
      }
    })
  }).
  when('/team', {
    template: '<team model="$resolve.model" />',
    resolve: angular.extend(globalResolvers, {
      model: function (teamModel) {
        teamModel.resolveTeams('plaah');
        return teamModel;
      }
    })
  });
};

export default routeConfig;