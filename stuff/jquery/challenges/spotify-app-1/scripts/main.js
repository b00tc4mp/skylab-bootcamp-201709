var spotifyView = new SpotifyView();

var spotifyApi = new SpotifyApi('BQAVJWzsiVHf5fx8n-a0xcBJtvo5Ul2d7NrRLoX5W4vmhD6eEBxaEkkKdAZoQmfYzO2if24_0t5H_s0DrIut2Q');

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    spotifyApi.searchArtists(query)
        .then(function (artists) {
            if (artists.length) {
                spotifyView.listArtists(artists);
            }
        })
        .fail(function (err) {
            console.error('KO', err);
        });
});

spotifyView.$artistsSelector.change(function () {
    var artistId = $(this).val();

    spotifyApi.getAlbums(artistId)
        .then(function (albums) {
            if (albums.length) {
                spotifyView.listAlbums(albums);
            }
        })
        .fail(function (err) {
            console.error('KO', err);
        });
});

spotifyView.$albumsSelector.change(function () {
    var albumId = $(this).val();

    spotifyApi.getTracks(albumId)
        .then(function (tracks) {
            if (tracks.length) {
                spotifyView.listTracks(tracks);
            }
        })
        .fail(function (err) {
            console.error('KO', err);
        });
});

$(document).on('click', 'a', function (event) {
    event.preventDefault();

    var $anchorTrack = $(this);

    var previewUrl = $anchorTrack.data('preview');
    var name = $anchorTrack.text();

    spotifyView.showTrack(name, previewUrl);
});