const routeConfig = ($routeProvider) => {
  $routeProvider.when('/', {
    template: '<home user-data="$resolve.userdata"></home>',
    resolve: {
      userdata: function (facebookModel) {
        return facebookModel.resolveUserdata();

      }
    }
  });
};
export default routeConfig;