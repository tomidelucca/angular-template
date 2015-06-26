app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'views/partials/view1.html',
      controller  : 'View1Ctrl'
    })
    .otherwise({ redirectTo: '/' });

}]);