import axios from 'axios';
import { IFilterResponse } from '../../interfaces';

const getFilters = async () => (
    (await axios.get<IFilterResponse>('http://www.mocky.io/v2/5a25fade2e0000213aa90776')).data
);

export { getFilters };
