import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IFilterState {
    current_page: number;
    page_size: number;
    selected_source: string;
    query_text: string;
}

export const appInitialState: IFilterState = {
    current_page: 1,
    page_size: 10,
    selected_source: 'frontendbr',
    query_text: '',
}

export const setCurrentPage = createAction('[Filter] Modificar Pagina Atual', props<{current_page: number}>());

export const filterReducer = createReducer(
    appInitialState,
    on(setCurrentPage, (state, {current_page}) => {
        return {...state, current_page: current_page};
    })
);