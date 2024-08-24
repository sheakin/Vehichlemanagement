import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddCustomer() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <div className='mt-5'>
            <button className='btn btn-success' onClick={handleShow}>Add Customer</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <FloatingLabel controlId="floatingName" label="Customer Name" className="mb-3">
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                            <Form.Control type="number" placeholder="" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingVehicleNo" label="Vehicle No" className="mb-3">
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingImage" label="Image" className="mb-3">
                            <Form.Control type="file" placeholder="" />
                        </FloatingLabel>

                        <div className='d-flex flex-column align-content-center'>
                            <button type='submit' className='btn btn-dark'>Submit</button>
                            <button type='button' className='btn btn-dark mt-2'>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </div>
    </div>
  )
}

export default AddCustomer