import React, { useState, useEffect } from 'react';
import * as FilterService from '../services/filters';
import { IFilterResponse } from '../interfaces';


// import { Card } from '../components';

function HomePage() {

    const [responseFilter, setResponseFilter] = useState<IFilterResponse>();

    useEffect(() => {
        const _getFilters = async () => {
            const response : IFilterResponse = await FilterService.getFilters();
            setResponseFilter(response);
        }
        _getFilters();
    }, []);

    return (
        <>
           HomePage App
        </>
    );
}

export default HomePage;
