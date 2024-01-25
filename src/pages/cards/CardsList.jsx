import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import CardAdd from '../../Modals/CardAdd'
import { cardsAdded, cardDelete } from './CardsSlice'


export default function CardsList() {
    const cards = useSelector((state)=> state.cards)
    const [status, setStatus] = useState('')
    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false)
    const dispatch  = useDispatch()
    const addCard = ()=>{
        let payload ={
            id: cards.length + 1,
            title, 
            status
        }
        dispatch(cardsAdded({...payload}))
        setOpen(false)
    }
  return (
    <div className='my-5 container'>
        <div className="row">
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Open</h1>
                </div>
                {
                    cards.filter(item => item.status === 'open').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info'>edit</button>
                            <button className='btn btn-danger' onClick={()=>dispatch(cardDelete(index))}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setOpen(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Pending</h1>
                </div>
                {
                    cards.filter(item => item.status === 'pending').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info'>edit</button>
                            <button className='btn btn-danger' onClick={()=>dispatch(cardDelete(index))}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setOpen(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Inproge</h1>
                </div>
                {
                    cards.filter(item => item.status === 'inproge').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info'>edit</button>
                            <button className='btn btn-danger' onClick={()=>dispatch(cardDelete(index))}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setOpen(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Progress</h1>
                </div>
                {
                    cards.filter(item => item.status === 'progress').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info'>edit</button>
                            <button className='btn btn-danger' onClick={()=>dispatch(cardDelete(index))}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setOpen(true)}>Add User</button>
                </div>
            </div>
        </div>
        </div>
        <CardAdd open={open} toggle={()=>setOpen(false)} addCard={addCard} setOpen={setOpen} setStatus={setStatus} setTitle={setTitle}/>
    </div>
  )
}
