export interface IPlaylistResponse {
    message: string,
    playlists: {
        items: IPlaylist[]
    }
};

export interface IPlaylist {
    description: string;
    external_urls: {
        spotify: string
    }
    id: string,
    images: any
};
