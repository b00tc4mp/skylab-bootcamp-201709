var $artistsPanel = $('#artists');
var $albumsPanel = $('#albums');
var $tracksPanel = $('#tracks');
var $trackPanel = $('#track');

$artistsPanel.hide();
$albumsPanel.hide();
$tracksPanel.hide();
$trackPanel.hide();

var $artistsSelector = $('#artists select');
var $albumsSelector = $('#albums select');
var $tracksList = $('#tracks ul');
var $trackTitle = $('#track h1');
var $trackPlayer = $('#player');

var token = 'BQDEmftEiY0I67dzPdA2HJRTAQJ-q4M9rT1MVChMKSkGcR0wZRvixJS1RqOlR7raxXsrCyQC-LBCUdcpFlEj47pU1l081-oP5we9joymv3ChJnwINkD2fLJnC0EsKhAlMiPP9rV7RgmS';

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
    }).then(function (results) {

        if (results.artists && results.artists.items && results.artists.items.length) {
            var artists = results.artists.items;

            $artistsSelector.empty();

            $artistsSelector.append('<option default>Select an artist ...</option>');

            artists.forEach(function (artist) {
                $artistsSelector.append('<option value="' + artist.id + '">' + artist.name + '</option>');
            });

            $albumsPanel.hide();
            $albumsSelector.empty();
            $tracksPanel.hide();
            $tracksList.empty();
            $trackPanel.hide();
            $trackPlayer.empty();
            $artistsPanel.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$artistsSelector.change(function () {
    var artistId = $(this).val();

    $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(function (results) {
        if (results.items && results.items.length) {
            var albums = results.items;

            $albumsSelector.empty();

            $albumsSelector.append('<option default>Select an album ...</option>');

            albums.forEach(function (album) {
                $albumsSelector.append('<option value="' + album.id + '">' + album.name + '</option>');
            });

            $tracksPanel.hide();
            $tracksList.empty();
            $trackPanel.hide();
            $trackPlayer.empty();
            $albumsPanel.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$albumsSelector.change(function () {
    var albumId = $(this).val();

    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId + '/tracks',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(function (results) {
        if (results.items && results.items.length) {
            var tracks = results.items;

            $tracksList.empty();

            tracks.forEach(function (track) {
                //$ulTracks.append('<li><a href="' + track.external_urls.spotify + '" target="_blank">' + track.name + '</a></li>');

                $tracksList.append('<li><a href="#" data-preview="' + track.preview_url + '">' + track.name + '</a></li>');
            });

            $trackPanel.hide();
            $trackPlayer.empty();
            $tracksPanel.show();
        }

    }).fail(function (err) {
        console.error('KO', err);
    });
});

$(document).on('click', 'a', function (event) {
    event.preventDefault();

    var $anchorTrack = $(this);

    var previewUrl = $anchorTrack.data('preview');
    var name = $anchorTrack.text();

    $trackTitle.text(name);

    $trackPlayer.empty();
    $trackPlayer.html('<audio controls><source src="' + previewUrl + '" type="audio/mpeg"></audio>');
    $trackPanel.show();
});

