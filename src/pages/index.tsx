import React, { useState, useEffect } from 'react';
import * as FilterService from '../services/filters';
// import { Card } from '../components';

interface IFilterResponse {
    filters: IFilters[]
};

interface IFilters {
    id: string;
    name: string;
    values?: Array<object>,
    validation?: Array<object>
};

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
