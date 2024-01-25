import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1 ,first_name: "Elbek", last_name: "Imomaliyev", age: 17, mail: "imomaliyev@gmail.com"},
    {id:2 ,first_name: "Aziz", last_name: "Soliyev", age: 18, mail: "wwwee@gmil.com"}
]

const UsersSlice = createSlice({
        name: "users",
        initialState,
        reducers:{
            usersAdded(state, action){
                    state.push(action.payload)
            },
            userDelete(state,action){
                let index = action.payload
                state.splice(index, 1)
            },
            userUpdate(state, action){
                const {id, first_name, last_name, age, mail} = action.payload
                let sing_user = state.find(item => item.id === id)
                sing_user.first_name = first_name
                sing_user.last_name = last_name
                sing_user.age = age
                sing_user.mail = mail
            }
        }
})

export const {usersAdded, userDelete, userUpdate} = UsersSlice.actions
export default UsersSlice.reducer
 


