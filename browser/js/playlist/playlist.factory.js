
juke.factory('PlaylistFactory', function ($http) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.getAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.getById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) { return response.data; });
  };

  PlaylistFactory.addSong = function (playlist, song) {
    return $http.post('/api/playlists/' + playlist.id + '/songs', song)
    .then(function (response) {
      return response.data;
    });
  };

  return PlaylistFactory;

});

