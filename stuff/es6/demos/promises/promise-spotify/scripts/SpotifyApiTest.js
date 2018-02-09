const spotifyApi = new SpotifyApi('BQB_XNYVWgX5hn9CGaARMWmnit1xz9WcgBKwZiN_RbXTY6TaYsR5BMiQfRcSmFXAmPaZ9D3kziW8va1vlgEOrA')

function testSearchArtistsReturnsResultsOnExistingArtist() {
    spotifyApi.searchArtists('madonna')
        .then(function (artists) {
            if (artists.length > 0)
            console.log('testSearchArtistsReturnsResultsOnExistingArtist', 'OK')
            else
                console.error('testSearchArtistsReturnsResultsOnExistingArtist', 'KO', 'no results found')
        })
        .catch(function (err) {
            console.error('testSearchArtistsReturnsResultsOnExistingArtist', 'KO', 'unexpected error')
        })
}

function testGetAlbumsReturnsResultsOnExistingArtist() {
    spotifyApi.searchArtists('madonna')
        .then(function (artists) {
            const artistId = artists[0].id

            return spotifyApi.getAlbums(artistId)
        })
        .then(function (albums) {
            if (albums.length > 0)
                console.log('testGetAlbumsReturnsResultsOnExistingArtist', 'OK')
            else
                console.error('testGetAlbumsReturnsResultsOnExistingArtist', 'KO', 'no results received')
        })
        .catch(function (err) {
            console.error('testGetAlbumsReturnsResultsOnExistingArtist', 'KO', 'unexpected error')
        })
}

function testGetTracksReturnsResultsOnExistingAlbum() {
    spotifyApi.searchArtists('madonna')
        .then(function (artists) {
            const artistId = artists[0].id

            return spotifyApi.getAlbums(artistId)
        })
        .then(function (albums) {
            const albumId = albums[0].id

            return spotifyApi.getTracks(albumId)
        })
        .then(function (tracks) {
            if (tracks.length > 0)
                console.log('testGetTracksReturnsResultsOnExistingAlbum', 'OK')
            else
                console.error('testGetTracksReturnsResultsOnExistingAlbum', 'KO', 'no results received')
        })
        .catch(function (err) {
            console.error('testGetTracksReturnsResultsOnExistingAlbum', 'KO', 'unexpected error')
        })
}

testSearchArtistsReturnsResultsOnExistingArtist()

testGetAlbumsReturnsResultsOnExistingArtist()

testGetTracksReturnsResultsOnExistingAlbum()