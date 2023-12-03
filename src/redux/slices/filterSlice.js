import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setFilter(state,action){
            state.sort=action.payload.sort;
            state.categoryId=Number(action.payload.categoryId);
        }

    }
});

export const {setCategoryId, setSort, setFilter} = filterSlice.actions

export default filterSlice.reducer;