'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      // title: 'home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'signup',
      url: '/signup',
      // title: 'signup',
      template: require('../view/signup/signup.html'),
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    },
    {
      name: 'album',
      url: '/album',
      // title: 'album',
      template: require('../view/album/album.html'),
      controller: 'AlbumController',
      controllerAs: 'albumCtrl'
    }
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
}
