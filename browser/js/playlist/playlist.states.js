juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'NewPlaylistCtrl'
  });

  $stateProvider.state('playlist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/single-playlist.html',
    controller: 'SinglePlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.getById($stateParams.playlistId);
      }
    }
  });

});
