import axios from 'axios';

interface IFilterResponse {
    filters: IFilters[]
};

interface IFilters {
    id: string;
    name: string;
    values?: Array<object>,
    validation?: Array<object>
};

const getFilters = async () => (
    (await axios.get<IFilterResponse>('http://www.mocky.io/v2/5a25fade2e0000213aa90776')).data
);

export { getFilters };
