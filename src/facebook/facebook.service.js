const LOGIN_SCOPES = 'email';

class FacebookService {
  constructor($q) {
    console.log('initializing q');
    this.$q = $q;
  }

  checkLoginStatus() {
    let deferred = this.$q.defer();
    FB.getLoginStatus(response => {
      console.log('status', response);
      if ('connected' === response.status) {
        deferred.resolve(response);
      } else {
        deferred.reject(response);
      }
    });
    return deferred.promise;
  }

  readUserInfo() {
    let deferred = this.$q.defer();
    FB.api('/me', {fields: 'picture.width(400), name, birthday, email'}, response => {
      if (!response || response.error) {
        deferred.reject('Error occured');
      } else {
        deferred.resolve(response);
      }
    });
    return deferred.promise;
  }

  login() {
    let deferred = this.$q.defer();
    console.log('do login');
    FB.login((result) => {
      console.log('result', result);
      if (result.status === 'not_authorized') {
        deferred.reject(result.status);
      } else {
        deferred.resolve(result);
      }
    }, {scope: LOGIN_SCOPES});
    return deferred.promise;
  }


}
export default FacebookService;

