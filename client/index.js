'use strict';

angular.module('checkList', ['firebase', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  
  $stateProvider.state('about',{url: '/about', templateUrl: '/views/home/about.html'})
  .state('home',{url: '/', templateUrl: '/views/home/home.html'})
  .state('faq',{url: 'faq', templateUrl: '/views/home/faq.html'})
  .state('register',{url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('contact',{url: '/contact', templateUrl: '/views/home/contact.html'});
}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
