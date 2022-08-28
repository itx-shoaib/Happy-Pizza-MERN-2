import React, { useEffect, useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Items({items , categorys}) {
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState()
    const [category, setcategory] = useState(
        []
      )
      const [item, setItem] = useState([])
      const handleClose = () => setShow(false);
      async function AddtoCart() {
        const cartDetail = {
          price:items.Price,
          ProductID:items.ID,
          quantity:quantity,
          userID:JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id
        }
        
        try {
          const result = await axios.post('http://localhost:5000/api/admin/cart',cartDetail)
          console.log(result)
          setQuantity('')
        } catch (error) {
          console.log(error);
        }
        
        setShow(false);
      }
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
        <Form.Control type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" style={{width:"100%"}} onClick={AddtoCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}

export default Items
