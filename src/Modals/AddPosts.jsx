import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default function AddPosts({open,toggle, addPost, setOpen}) {
  return (
    <Modal isOpen={open} toggle={toggle} >
        <ModalHeader>
            <h1>Add Post</h1>
        </ModalHeader>
        <ModalBody> 
            <form id='form' onSubmit={addPost}>
            <input type="text" placeholder='Titele...' className='form-control  my-2' />
            <select className='form-control '>
                <option value="Unkown author" hidden>Select author</option>
                <option value="Davie Gray">Davie Gray</option>
                <option value="Neil Young">Neil Young</option>
                <option value="Dude Lebowski">Dude Lebowski</option>
            </select>
            <textarea cols="30" rows="1" placeholder='Content...' className='form-control my-2'></textarea>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-primary' type='submit' form='form' onClick={()=>setOpen(false)}>save</button>
        </ModalFooter>
    </Modal>
  )
}
