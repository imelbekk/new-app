import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import UsersAdd from '../../Modals/UsersAdd';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { usersAdded, userDelete, userUpdate} from './UsersSlice';

export default function UsersList() {
    const users = useSelector((state)=> state.users)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [mail, setMail] = useState("")
    const [edit, setEdit] = useState("")
    const changeUser = (e) =>{
        let payload ={
            id: edit ? edit.id : nanoid(),
            first_name: first_name ? first_name : edit.first_name,
            last_name: last_name ? last_name : edit.last_name,
            age: age ? age : edit.age,
            mail: mail ? mail : edit.mail
        }
        setOpen(false)
        e.preventDefault()
        if(edit){
            dispatch(userUpdate({...payload}))
        }else{
        dispatch(usersAdded({...payload}))
        }
    }
    const toggle = () =>{
        setOpen(false)
        setEdit('')
    }
    const openModal = (item) => {
        setOpen(true)
        setEdit(item)
    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between my-3'>
            <button className='btn btn-info' onClick={()=>setOpen(true)}>add</button>
        </div>
        <table className='table my-4 table-bordered'>
            <thead className='text-center'>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    users.map((item,index)=>{
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.age}</td>
                            <td>{item.mail}</td>
                            <td>
                                <button className='btn btn-success mx-2' onClick={()=>openModal(item) }>edit</button>
                                <button className='btn btn-danger' onClick={()=>dispatch(userDelete(index))}>delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <UsersAdd open={open} toggle={toggle} changeUser={changeUser} setFirstName={setFirstName} edit={edit} first_name={first_name} last_name={last_name} age={age} mail={mail} setLastName={setLastName} setAge={setAge} setMail={setMail}/>
    </div>
  )
}
