// NEW PLAYLIST CONTROLLER

juke.controller('NewPlaylistCtrl', function ($scope, PlaylistFactory, $state) {

  $scope.submit = function () {
    PlaylistFactory.create($scope.newPlaylist)
    .then(function (newPlaylist) {
      $state.go('playlist', { playlistId: newPlaylist.id });
    });

  };

});

juke.controller('PlaylistListCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.getAll()
  .then(function (playlists) {
    $scope.playlists = playlists;
  });
});

juke.controller('SinglePlaylistCtrl', function($scope, thePlaylist, SongFactory, PlaylistFactory, PlayerFactory){

  SongFactory.getAllSongs()
  .then(function (songs) {
    $scope.songs = songs;
  });

  $scope.playlist = thePlaylist;

  $scope.playlist.songs = $scope.playlist.songs.map(function (song) {
    return SongFactory.convert(song);
  });

  $scope.submit = function () {
    $scope.playlist.songs.push(SongFactory.convert($scope.selectedSong));
    PlaylistFactory.addSong($scope.playlist, $scope.selectedSong);
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

});
