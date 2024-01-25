import { configureStore } from "@reduxjs/toolkit";
import UsersReduser from "../pages/users/UsersSlice";
import PostsReducer from "../pages/posts/PostSlice";
import CardsReducer from "../pages/cards/CardsSlice";

const store = configureStore({
    reducer:{
        users: UsersReduser,
        posts: PostsReducer,
        cards: CardsReducer
    }
})

export default store 