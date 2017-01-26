'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Controller Initial States', function() {
  var $componentController;

  beforeEach(angular.mock.module('routesApp'));
  beforeEach(angular.mock.inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should have a title of home', function () {
    console.log('\n\n::: SEE ME?\n\n');
    var bindings = {title: 'home test title'};
    var ctrl = $componentController('HomeController', null, bindings);
    // var ctrl = $componentController('homeController', null, bindings);
    // var ctrl = $componentController('homeCtrl', null, bindings);
    console.log('\n\n::: ctrl  is:', ctrl, '\n\n');
    // expect(ctrl.title).toBe('home test title');
  });
});

// });

// //////////////////////////////////////////////////////////////

// 'use strict';
//
// require('./lib/test-setup.js');
// const angular = require('angular');
//
// describe('HomeController', function() {
//   beforeEach( () => {
//     angular.mock.module('routesApp');
//     angular.mock.inject( $controller => {
//       this.homeCtrl = new $controller('HomeController');
//     });
//   });
//
//   describe('this.title property', () => {
//     it('should have a title property that equals home', () => {
//       expect(this.homeCtrl.title).toBe('home');
//     });
//   });
// });
