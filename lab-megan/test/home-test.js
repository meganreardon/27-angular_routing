'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Home Controller', function() {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('initial properties', () => {
    it('should return a title of hwelcome to the home page', () => {
      expect(this.homeCtrl.title).toBe('welcome to the home page');
    });
  });

});
