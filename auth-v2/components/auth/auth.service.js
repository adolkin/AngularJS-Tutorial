(function () {

  'use strict';

  angular
    .module('app')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', 'authManager'];

  function authService($state, angularAuth0, authManager) {

    // When a user calls the login function they will be redirected
    // to Auth0's hosted Lock and will provide their authentication
    // details.
    function login() {
      angularAuth0.authorize();
    }

    // Once a user is successfuly authenticated and redirected back
    // to the AngularJS application we will parse the hash to extract
    // the idToken and accessToken for the user.
    function handleParseHash() {
      angularAuth0.parseHash(
        { _idTokenVerification: false },
        function (err, authResult) {
          if (err) {
            console.log(err);
          }
          if (authResult && authResult.idToken) {
            setUser(authResult);
          }
        });
    }

    // This function will destroy the access_token and id_token
    // thus logging the user out.
    function logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
    }

    // If we can successfuly parse the id_token and access_token
    // we wil store them in localStorage thus logging the user in
    function setUser(authResult) {
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
    }

    // This method will check to see if the user is logged in by
    // checking to see whether they have an id_token stored in localStorage
    function isAuthenticated() {
      return authManager.isAuthenticated();
    }

    return {
      login: login,
      handleParseHash: handleParseHash,
      logout: logout,
      isAuthenticated: isAuthenticated
    }
  }
})();