angular.module('MeanBlogApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: 'app/views/post.html',
    controller: 'PostCtrl'
  })
  .state('edit-post', {
    url: '/post/:id/edit',
    templateUrl: 'app/views/post_edit.html',
    controller: 'PostCtrl'
  });

  $locationProvider.html5Mode(true);
}]);
