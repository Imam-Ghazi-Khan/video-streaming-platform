import {configureStore} from "@reduxjs/toolkit"
import videoReducer from "./videoSlice"
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer:{
        video:videoReducer,
        search: searchSlice,
    },
})

export default appStore;