// NEW PLAYLIST CONTROLLER

juke.controller('NewPlaylistCtrl', function ($scope, PlaylistFactory) {

  $scope.submit = function () {
    PlaylistFactory.create($scope.newPlaylist);
    $scope.newPlaylist = '';

  };

});

juke.controller('PlaylistListCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.getAll()
  .then(function (playlists) {
    $scope.playlists = playlists;
  });
});

juke.controller('SinglePlaylistCtrl', function($scope, thePlaylist){

  $scope.playlist = thePlaylist;

});
