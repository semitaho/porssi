const spinnerProvider = $httpProvider => {

  const checkPendingRequests = (preloaderModel, http) => {
    if (http.pendingRequests.length < 1) {
      preloaderModel.show = false;
    }
  };
  $httpProvider.interceptors.push(($injector, preloaderModel) => {
    return {
      'request': function (config) {
        console.log('doing request');
        preloaderModel.show = true;
        return config;
      },

      'response': function (response) {
        let http = $injector.get('$http');
        checkPendingRequests(preloaderModel, http);
        return response;
      },
      'responseError': function (rejection) {
        let http = $injector.get('$http');
        checkPendingRequests(preloaderModel, http);
        return rejection;

      }
    };
  });
};
export default spinnerProvider;
