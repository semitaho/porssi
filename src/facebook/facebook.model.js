class FacebookModel {

  constructor(facebookService) {
    this.data = {};
    this.facebookService = facebookService;

  }

  init(data) {
    angular.copy(data, this.data);
    console.log('this data', this.data);
    return this.data;
  }

  resolveUserdata() {
    if (Object.keys(this.data).length > 0) {
      console.log('data found in cache');
      return this.data;
    }

    const successLogin = (response) => {
      console.log('successLogin - ', response);
      return this.facebookService.readUserInfo();
    };
    
    return this.facebookService.checkLoginStatus().then(successLogin, (error) => {
      return this.facebookService.login().then(successLogin);
    }).then(userData => {
      console.log('got use data', userData);
      return this.init(userData);
    });
  }
}

export default FacebookModel;