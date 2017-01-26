'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Controller Initial States', function() {
  var $componentController;

  beforeEach(angular.mock.module('routesApp'));
  beforeEach(angular.mock.inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should show the title as home', function () {
    var bindings = {title: 'home'};
    var ctrl = $componentController('homeController', null, bindings);
    expect(ctrl.title).toBe('home');
  });

  // below brought over from lab 23 for examples
  // it('should show the player location at the porch', function () {
  //   var bindings = {location: 'porch'};
  //   var ctrl = $componentController('playerInfo', null, bindings);
  //   expect(ctrl.location).toBe('porch');
  // });
  //
  //
  // it('should return an empty inventory', function () {
  //   var bindings = {inventory: ''};
  //   var ctrl = $componentController('playerInfo', null, bindings);
  //   expect(ctrl.inventory).toBe('');
  // });
  //
  // it('should have the selected location as north', function() {
  //   var bindings = {directions: 'north'};
  //   var ctrl = $componentController('gamePad', null, bindings);
  //   expect(ctrl.directions).toBe('north');
  // });
  //
  // it('should have a game history length of one', function() {
  //   var bindings = '';
  //   var ctrl = $componentController('gameHistory', null, bindings);
  //   expect(ctrl.history.length).toEqual(1);
  // });

});
