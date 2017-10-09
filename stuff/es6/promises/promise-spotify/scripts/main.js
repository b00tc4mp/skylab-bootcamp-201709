{
    const $spinner = $('img')
    $spinner.hide()

    const spotifyApi = new SpotifyApi('BQB_XNYVWgX5hn9CGaARMWmnit1xz9WcgBKwZiN_RbXTY6TaYsR5BMiQfRcSmFXAmPaZ9D3kziW8va1vlgEOrA')

    $('button').click(function () {
        $spinner.show()

        spotifyApi.searchArtists('jackson')
            .then(function (artists) {
                console.log(artists)

                const artistId = artists[0].id

                return artistId
            })
            .then(function (artistId) {
                return spotifyApi.getAlbums(artistId)
            })
            .then(function (albums) {
                console.log(albums)

                const albumId = albums[0].id

                return albumId
            })
            .then(function (albumId) {
                return spotifyApi.getTracks(albumId)
            })
            .then(function (tracks) {
                console.log(tracks)

                $spinner.hide()
            })

    })
}