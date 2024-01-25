import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function CardAdd({open,toggle, addCard, setTitle, setStatus}) {
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add user</h1>
        </ModalHeader>
        <ModalBody>
            <form>
                <input type="text" placeholder='Title' className='form-control my-2' onChange={(e)=>setTitle(e.target.value)} />
                <select className='form-control my-2' onChange={(e)=>setStatus(e.target.value)}>
                    <option value="" hidden>select page</option>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="inproge">inproge</option>
                    <option value="progress">progress</option>
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-primary' onClick={addCard}>save</button>
        </ModalFooter>
    </Modal>
  )
}
