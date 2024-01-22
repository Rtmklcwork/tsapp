import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface GitHubState {
    favourites: string[]
}

const initialState: GitHubState = {
    favourites: []
}

export const GitHubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFav(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
        },
        removeFav(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
        }
    }
})

export const githubActions = GitHubSlice.actions
export const githubReducer = GitHubSlice.reducer