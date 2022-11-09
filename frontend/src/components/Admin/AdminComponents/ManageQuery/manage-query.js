import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Modal } from 'react-bootstrap';
import './manage-query.css';

const ManageQuery = () => {

    const [message, setMessage] = useState([]);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({
      userId: localStorage.getItem('userId'),
      firstName: localStorage.getItem('userName'),
      replies : ''
  });
  const [id, setId] = useState('');

    const getMessages = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/message/"
            );
            console.log(data.data);
            // console.log(data.data.orders)
            setMessage(data.data.msg);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getMessages();
    }, []);

    const modalToggle = () => {
      setModal(!modal);
          
  }
  // let id = '';
  const handleId = (Id) => {
    setModal(!modal);
     setId(Id);
     console.log(id);      
}
console.log(id);



  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  //setData({ ...data, [e.target.name]: e.target.value });
  //console.log(e);
  try {

      const url = `http://localhost:3000/message/reply/${id}`;
      const res = await axios.patch(url, data);
      console.log(res);
      modalToggle();
      getMessages();
      setData();
  } catch (error) {
      console.log(error)
  }
}

    return(
        <section className="intro">
  <div className="h-100" style={{ backgroundColor: "rgb(176, 211, 220)" }}>
    <div style={{ padding: "4%" }}>
      <div
        className="card justify-content-center col-12 border-0"
        style={{ backgroundColor: "rgb(176, 211, 220)" }}
      >
        <div className="card-body">
          <h2 style={{ paddingLeft: "13.5%" }} className="card-title">
            List of User Messages
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card bg-dark shadow-2-strong">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-dark table-borderless table-striped mb-0">
                    <thead>
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Message ID</th>
                        <th scope="col">Message</th>
                        <th scope="col">Replies</th>
                        <th scope="col">Date</th>
                        <th scope="col">Reply</th>
                      </tr>
                    </thead>
                    <tbody>
                        {message.reverse().map((msg)=>{
                            return(
                      <tr>
                        <th scope="row">{msg.firstName}</th>
                        <td>{msg._id}</td>
                        <td>{msg.message}</td>
                        <td>{msg.replies}</td>
                        <td>{msg.date.slice(0,10)}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-light m-1"
                            onClick={()=>handleId(msg._id)}
                            // onClick={modalToggle}
                          >
                            
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-reply-fill ml-1 mb-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                            </svg>Reply
                          </button>
                        </td>
                      </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal show={modal} centered onHide={modalToggle} className="text-center">
<Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
        Post your reply
    </Modal.Title>
</Modal.Header>
<Form onSubmit={handleSubmit}>
    <Modal.Body>
        <Form.Group >
            <Form.Label>Reply</Form.Label>
            <Form.Control as="textarea"
                name='replies'                
                onChange={handleChange}
                className='msg-input' />
        </Form.Group>
    </Modal.Body>
    <Modal.Footer>
        <Button type='submit'>Submit reply</Button>
        {/* <Button onClick={modalToggle}>Close</Button> */}
    </Modal.Footer>
</Form>
</Modal>
    
  </div>
</section>

    )

}
export default ManageQuery;
