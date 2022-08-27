import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Items({items , categorys}) {
    const [show, setShow] = useState(false);
    const [category, setcategory] = useState(
        []
      )
      const [item, setItem] = useState([])
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
                              <div
                        className="row productcard bs"
                        type="button"
                      // onClick={() => {
                      //   showmodal(item);
                      // }}
                      onClick={handleShow}
                      // data-bs-toggle="modal"
                      // data-bs-target="#addtocart"
                      >
                        {items.category_id === categorys.ID && (<>
                          <div className="col-xl-7">
                            <h5 className="boldtext">{items.Title}</h5>
                            {items.Description !== "undefined" ? (<p>{items.Description}</p>) : (<></>)}
                            {items.Price !== "undefined" ? (<h5>$ {items.Price}</h5>) : (<></>)}

                          </div>
                          <div className="col-xl-5">
                            <img className="productimg" src={items.Image} alt=".." />
                          </div>
                          </>
                        )}
                      </div>

                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{items.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5> ${items.Price}</h5>
            <p>{items.Title}</p>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number"/>
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" style={{width:"100%"}} onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}

export default Items
