'use strict';

require('./lib/test-setup.js');
require('angular-mocks');

const angular = require('angular');

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
