import React from 'react'
import AddPosts from '../../Modals/AddPosts';
import {  useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { getAllPosts } from './PostSlice';
import { postAdded } from './PostSlice';
import TimeAgo from './TimeAgo';

export default function PostsList() {
    const [open, setOpen] = useState(false);
    const posts = useSelector(getAllPosts)
    const dispatch = useDispatch()
    const addPost =(e)=>{
        e.preventDefault();
        let title = e.target[0].value
        let author = e.target[1].value
        let content = e.target[2].value
        dispatch(postAdded({title: title, author: author, content: content}))

    }

  return (
    <div className='container my-3'>
        <h1 className='text-center my-2'>Posts</h1>

        <div className='w-50 m-auto'>
            <button className='btn  btn-primary' onClick={()=>setOpen(true)}>add post</button>
            {
                posts.map((item,index)=>{
                    return <table key={index} className='card  my-4 m-auto p-4'>
                        <h3>{item.title}</h3>
                        <h6>by {item.author}</h6>
                        <TimeAgo time={item.date} />
                        <p className='my-1'>{item.content}</p>
                    </table>
                })
            }
        </div>
        <AddPosts open={open} toggle={()=>setOpen(false)} addPost={addPost} setOpen={setOpen}/>
    </div>
  )
}
