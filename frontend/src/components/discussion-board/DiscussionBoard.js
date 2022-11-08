import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './DiscussionBoard.css'
import MessageCard from './Message';

export default function DiscussionBoard() {

    const [messages, setMessages] = useState([]);
    const [modal, setModal] = useState(false);
    
    const [data, setData] = useState({
        userId: localStorage.getItem('userId'),
        firstName: localStorage.getItem('userName'),
        message: '',
    });

    const getMessages = async () => {
        try {
            const data = await axios.get('http://localhost:3000/message');
            console.log(data.data.msg);
            setMessages(data.data.msg.reverse());
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMessages();
    }, []);

    const modalToggle = () => {
        setModal(!modal)
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //setData({ ...data, [e.target.name]: e.target.value });
        //console.log(e);
        try {
            const url = "http://localhost:3000/message";
            const res = await axios.post(url, data);
            console.log(res);
            modalToggle();
            getMessages();
            setData({
                message: ''
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div class="background w-100 col justify-content-center">
                <div class="container text-center text-white">
                    <div class="row pt-5">
                        <div class="col-lg-8 mx-auto">
                            <h1 class="display-4">Disscussion Board</h1>
                            <p class="lead mb-0">
                            </p>
                            <p class="lead">Powered by GetMeds <a class="text-white">
                                <u></u></a></p>
                        </div>
                    </div>
                </div>

                <button type="button" class="button-53 mb-5" onClick={modalToggle} ><svg
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-plus-circle-fill mt-1 mr-2" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>Add new query</button>

                <Modal show={modal} centered onHide={modalToggle} className="text-center">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add new Query
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="streetAddress">
                                <Form.Label>Your Query</Form.Label>
                                <Form.Control as="textarea"
                                    name='message'
                                    value={data.message}
                                    onChange={handleChange}
                                    className='msg-input' />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='submit'>Submit Query</Button>
                            {/* <Button onClick={modalToggle}>Close</Button> */}
                        </Modal.Footer>
                    </Form>
                </Modal>

                {messages.map(message => {
                    return (
                        <MessageCard msg={message} key={message._id} />
                    )
                })}
            </div>
        </>
    )
}