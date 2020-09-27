import React, { useState, useEffect } from 'react';
import * as FilterService from '../services/filters';
import * as PlaylistService from '../services/playlists';
import { IFilterResponse } from '../interfaces';

function HomePage() {

    const [responseFilter, setResponseFilter] = useState<IFilterResponse>();
    const [responsePlaylist, setResponsePlaylist] = useState();

    useEffect(() => {
        const _getFilters = async () => {
            const response : IFilterResponse = await FilterService.getFilters();
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
           HomePage App
        </>
    );
}

export default HomePage;
