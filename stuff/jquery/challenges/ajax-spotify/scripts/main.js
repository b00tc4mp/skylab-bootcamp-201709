var $artists = $('#artists');
var $albums = $('#albums');
var $tracks = $('#tracks');

$artists.hide();
$albums.hide();
$tracks.hide();

var $selectArtists = $('#artists select');
var $selectAlbums = $('#albums select');
var $ulTracks = $('#tracks ul');

var token = 'BQBJD5xJoa1pq7KX4KY9xwGBtvTYjlFo9_wYvZe396u_D6X33iuJs3PtFV6AL2V10DxpFLy_7q9OrQOM9MqjJqxW5e-YeGOY_DDTyvWW17gdd3_-AWFo1oo6UrZCyl-0diFK-Kr2J7ds';

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        },
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(function(results) {

        if (results.artists && results.artists.items && results.artists.items.length) {
            var artists = results.artists.items;

            $selectArtists.append('<option default>Select an artist ...</option>');

            artists.forEach(function(artist) {
                $selectArtists.append('<option value="' + artist.id + '">' + artist.name + '</option>');
            });

            $artists.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$selectArtists.change(function() {
    var artistId = $(this).val();

    $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(function(results) {
        if (results.items && results.items.length) {
            var albums = results.items;

            $selectAlbums.append('<option default>Select an album ...</option>');

            albums.forEach(function(album) {
                $selectAlbums.append('<option value="' + album.id + '">' + album.name + '</option>');
            });

            $albums.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$selectAlbums.change(function() {
    var albumId = $(this).val();

    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId + '/tracks',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(function(results) {
        console.log(results);

        if (results.items && results.items.length) {
            var tracks = results.items;

            tracks.forEach(function(track) {
                //$ulTracks.append('<li><a href="' + track.external_urls.spotify + '" target="_blank">' + track.name + '</a></li>');

                $ulTracks.append('<li><a href="#" data-preview="' + track.preview_url + '">' + track.name + '</a></li>');
            });

            $tracks.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$(document).on('click', 'a', function() {
    var $track = $(this);
    var previewUrl = $track.data('preview');
    var name = $track.text();

   console.log(previewUrl, name);
});

