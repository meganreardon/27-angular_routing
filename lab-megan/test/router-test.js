'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

// ------ home controller -----

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

// ----- signup controller -----

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

// ----- album controller -----

describe('Album Controller', function() {

  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.albumCtrl = new $controller('AlbumController');
    });
  });

  describe('initial properties', () => {
    it('should return a title of welcome to the album page', () => {
      expect(this.albumCtrl.title).toBe('welcome to the album page');
    });
  });

});
