import React, { useState, useEffect } from 'react';
import * as FilterService from '../services/filters';
import * as PlaylistService from '../services/playlists';
import { IFilterResponse, IPlaylistResponse } from '../interfaces';

import { Playlist } from '../components/playlist';

function HomePage() {

    const [responseFilter, setResponseFilter] = useState<IFilterResponse>();
    const [responsePlaylist, setResponsePlaylist] = useState<IPlaylistResponse>();

    useEffect(() => {
        const _getFilters = async () => {
            const response = await FilterService.getFilters();
            setResponseFilter(response);
        }

        const _getPlaylists = async () => {
            const response = await PlaylistService.getPlaylists();
            setResponsePlaylist(response);
        }
        _getPlaylists();
        _getFilters();
    }, []);

    return (
        <>
            {responsePlaylist && 
                <Playlist data={responsePlaylist.playlists.items} />
            }
        </>
    );
}

export default HomePage;
