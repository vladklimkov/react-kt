import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../../api/client'

const initialState = {
    categories: [],
    status: 'idle',
    error: null,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const out = await client.get('http://localhost:3333/categories/all')
    return out.data
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { } = categoriesSlice.actions

export default categoriesSlice.reducer

export const selectAllCategories = (state) => state.categories.categories

// https://redux.js.org/tutorials/essentials/part-5-async-logic