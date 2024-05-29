import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../../api/client'

const initialState = {}

export const fetchCategory = createAsyncThunk('category/fetchCategory', async (id) => {
    const out = await client.get(`http://localhost:3333/categories/${id}`)
    return out.data
})

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategory.pending, (state, action) => {
                const id = action.meta.arg
                if (!state[id]) {
                    state[id] = {}
                }
                state[id].status = 'loading'
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                const id = action.meta.arg
                if (!state[id]) {
                    state[id] = {}
                }
                state[id].status = 'succeeded'
                state[id].category = action.payload
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                const id = action.meta.arg
                if (!state[id]) {
                    state[id] = {}
                }
                state[id].status = 'failed'
                state[id].error = action.error.message
            })
    },
})

export const { } = categorySlice.actions

export default categorySlice.reducer

export const selectById = (state, id) => state.category[id]

// action.payload.category.id == action.meta.arg