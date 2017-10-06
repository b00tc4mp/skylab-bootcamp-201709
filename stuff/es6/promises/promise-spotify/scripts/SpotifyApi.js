class SpotifyApi {
    constructor(token) {
        this.artistsUrl = 'https://api.spotify.com/v1/search?type=artist&query=<QUERY>'
        this.albumsUrl = 'https://api.spotify.com/v1/artists/<ARTIST-ID>/albums'
        this.tracksUrl = 'https://api.spotify.com/v1/albums/<ALBUM-ID>/tracks'
        this.token = token
    }

    buildAjax(url) {
        return $.ajax({
            url: url,
            headers: {
                Authorization: 'Bearer ' + this.token
            }
        })
    }

    searchArtists(query) {
        return this.buildAjax(this.artistsUrl.replace('<QUERY>', query))
            .then(function (results) {
                return results.artists.items
            })
    }

    getAlbums(artistId) {
        return this.buildAjax(this.albumsUrl.replace('<ARTIST-ID>', artistId))
            .then(function (results) {
                return results.items
            })
    }

    getTracks(albumId) {
        return this.buildAjax(this.tracksUrl.replace('<ALBUM-ID>', albumId))
            .then(function (results) {
                return results.items
            })
    }
}
