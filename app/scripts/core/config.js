app.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug: false,
    events: true
  });

  $stateProvider
    .state('first', {
      url: '/first',
      controller: 'FirstController',
      templateUrl: '/views/partials/first.html',
      resolve: {
        loadMyFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'angular-template',
            files: [
              'scripts/controllers/FirstController.js'
            ]
          })
        }
      }
    });

  $urlRouterProvider.otherwise('/first');

});
