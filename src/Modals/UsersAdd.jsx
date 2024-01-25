import React from 'react'
import { Modal, ModalBody, ModalHeader,ModalFooter } from 'reactstrap'

export default function UsersAdd({open, toggle, changeUser, setFirstName, setLastName, setAge, setMail, edit}) {
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
                <form id='form' onSubmit={changeUser}>
                <input type="text" defaultValue={edit.first_name} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' className='form-control my-2'/>
                <input type="text" defaultValue={edit.last_name} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' className='form-control my-2'/>
                <input type="number" defaultValue={edit.age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' className='form-control my-2'/>
                <input type="email" defaultValue={edit.mail} onChange={(e)=>setMail(e.target.value)} placeholder='Mail' className='form-control my-2'/>
                </form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-info' form='form' type='submit' >save</button>
        </ModalFooter>
    </Modal>
  )
}
