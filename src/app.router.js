const routeConfig = ($routeProvider) => {
  $routeProvider.when('/', {
    template: '<home usermodel="$resolve.usermodel"></home>',
    resolve: {
      usermodel: function (usersModel) {
        return usersModel;
      }
    }
  });
};
export default routeConfig;