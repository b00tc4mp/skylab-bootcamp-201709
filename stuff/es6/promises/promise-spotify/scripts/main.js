var $spinner = $('img')
$spinner.hide()

const _spotifyApi = new SpotifyApi('BQAYrSxa2y6b5pqOZIq9o1RBEtKMsDWftJfGJz1CUcgVUEao49PbIFyiEblin3frHfdRQBetuiqOj5uJWK3z1Q')

$('button').click(function () {
    $spinner.show()

    _spotifyApi.searchArtists('jackson')
        .then(function(artists) {
            console.log(artists)

            const artistId = artists[0].id

            return artistId
        })
        .then(function(artistId) {
            return _spotifyApi.getAlbums(artistId)
        })
        .then(function(albums) {
            console.log(albums)

            const albumId = albums[0].id

            return albumId
        })
        .then(function(albumId) {
            return _spotifyApi.getTracks(albumId)
        })
        .then(function(tracks) {
            console.log(tracks)

            $spinner.hide()
        })

})