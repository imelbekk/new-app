import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

let date = sub(new Date(), {minutes : 30}).toISOString()

const initialState = [
    {id: 1, title: 'Learn Modern Redux', author: 'Neil Young', date: date, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum assumenda illum eius tempora quis!'},
]

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        },
        prepare({title,author,content}){
            return {
                payload:{
                    title: title,
                    content : content,
                    author: author,
                    date: new Date().toISOString()
                }
            }
        }
    }
})

export default PostsSlice.reducer
export const getAllPosts = (state) => state.posts
export const {postAdded} = PostsSlice.actions