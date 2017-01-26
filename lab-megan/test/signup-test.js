'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Signup Controller', function() {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('initial properties', () => {
    it('should return a title of welcome to the signup page', () => {
      expect(this.signupCtrl.title).toBe('welcome to the signup page');
    });
  });

});
