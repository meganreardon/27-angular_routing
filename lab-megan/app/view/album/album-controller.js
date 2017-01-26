'use strict';

require('./album.scss');

module.exports = ['$log', AlbumController];

function AlbumController($log) {
  $log.debug('AlbumController');

  this.title = 'welcome to the album page';
}
