export interface IFilterResponse {
    filters: IFilters[]
};

interface IFilters {
    id: string;
    name: string;
    values?: Array<object>,
    validation?: Array<object>
};
