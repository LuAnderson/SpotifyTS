export interface IPlaylistResponse {
    message: string,
    playlists: {
        items: IPlaylist[]
    }
};

interface IPlaylist {
    description: string;
    external_urls: {
        spotify: string
    }
    id: string,
    images: any
};
