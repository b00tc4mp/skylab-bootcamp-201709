class SpotifyView {
    constructor() {
        this.$artistsPanel = $('#artists');
        this.$albumsPanel = $('#albums');
        this.$tracksPanel = $('#tracks');
        this.$trackPanel = $('#track');

        this.$artistsPanel.hide();
        this.$albumsPanel.hide();
        this.$tracksPanel.hide();
        this.$trackPanel.hide();

        this.$artistsSelector = $('#artists select');
        this.$albumsSelector = $('#albums select');
        this.$tracksList = $('#tracks ul');
        this.$trackTitle = $('#track h1');
        this.$trackPlayer = $('#player');
    }

    listArtists(artists) {
        this.$artistsSelector.empty();

        this.$artistsSelector.append('<option default>Select an artist ...</option>');

        artists.forEach((artist) => {
            this.$artistsSelector.append('<option value="' + artist.id + '">' + artist.name + '</option>');
        });

        this.$albumsPanel.hide();
        this.$albumsSelector.empty();
        this.$tracksPanel.hide();
        this.$tracksList.empty();
        this.$trackPanel.hide();
        this.$trackPlayer.empty();
        this.$artistsPanel.show();
    }

    listAlbums(albums) {
        this.$albumsSelector.empty();

        this.$albumsSelector.append('<option default>Select an album ...</option>');

        albums.forEach((album) => {
            this.$albumsSelector.append('<option value="' + album.id + '">' + album.name + '</option>');
        });

        this.$tracksPanel.hide();
        this.$tracksList.empty();
        this.$trackPanel.hide();
        this.$trackPlayer.empty();
        this.$albumsPanel.show();
    }

    listTracks(tracks) {
        this.$tracksList.empty();

        tracks.forEach((track) => {
            //$ulTracks.append('<li><a href="' + track.external_urls.spotify + '" target="_blank">' + track.name + '</a></li>');

            this.$tracksList.append('<li><a href="#" data-preview="' + track.preview_url + '">' + track.name + '</a></li>');
        });

        this.$trackPanel.hide();
        this.$trackPlayer.empty();
        this.$tracksPanel.show();
    }

    showTrack(name, previewUrl) {
        this.$trackTitle.text(name);

        this.$trackPlayer.empty();
        this.$trackPlayer.html('<audio controls><source src="' + previewUrl + '" type="audio/mpeg"></audio>');
        this.$trackPanel.show();
    }
}