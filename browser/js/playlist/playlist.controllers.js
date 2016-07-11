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

juke.controller('SinglePlaylistCtrl', function($scope, thePlaylist, SongFactory, PlaylistFactory){

  SongFactory.getAllSongs()
  .then(function (songs) {
    $scope.songs = songs;
  });

  $scope.playlist = thePlaylist;

  $scope.submit = function () {
    PlaylistFactory.addSong($scope.playlist, $scope.selectedSong)
    .then(function (song) {
      $scope.playlist.songs.push(SongFactory.convert(song));
    });
  };

});
