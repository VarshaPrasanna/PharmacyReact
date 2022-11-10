
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./reply.css";
import 'bootstrap/dist/css/bootstrap.css';
import ChipInput from "material-ui-chip-input";
import _, { map } from 'underscore';
import ProductListAdmin from "./ProductListAdmin";
import { Modal, ModalBody } from 'react-bootstrap';

export default function PrescriptionReply(props) {

  const initialState = {

    _id: "",
    userId: "",
    firstName: "",
    imageUrl: "",
    prescriptionReplies: ['', '', ''],


  };

  const replyId = localStorage.getItem('replyId')
  const imageurl = localStorage.getItem('imageurl')

  const [reply, setReply] = useState(initialState);
  const [modal, setModal] = useState(false);
  
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(
    function () {
      async function getPrescription() {
        try {
          const response = await axios.get(`http://localhost:3000/prescription/pre/${_id}`);
          setReply(response.data.pre)
          console.log(response.data.pre._id)
          localStorage.setItem('replyId', response.data.pre._id)
          localStorage.setItem('imageurl', response.data.pre.imageUrl)
          console.log(response.data.pre)
        } catch (error) {
          console.log("error", error);
        }
      }
      getPrescription();
    },
    [props]
  );



  function handleSubmit(event) {
    event.preventDefault();
    async function Updatereply() {
      try {
        console.log(reply._id)
        await axios.patch(`http://localhost:3000/prescription/reply/${replyId}`, reply);
        window.confirm("reply updated Succesfully")
        navigate(`/managePrescription`)
      } catch (error) {
        console.log(error);
      }
    }
    Updatereply();
  }
  // Add Chips
  function handleAddChip(chip) {
    setReply({
      prescriptionReplies: [...reply.prescriptionReplies, chip]
    });
  }
  //Delete Chips
  function handleDeleteChip(chip) {
    setReply({
      prescriptionReplies: _.without(reply.prescriptionReplies, chip)
    });
  }
  function handleCancel() {
    navigate(`/managePrescription`)
  }


  function handleChange(event) {
    setReply({ ...reply.prescriptionReplies, [event.target.name]: event.target.value })
  }


  function handleCancel() {
    navigate(`/managePrescription`)
  }

  const modalToggle = () => {
    setModal(!modal)
  }

  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Reply to prescription</h4>
        </div>
      </div>
      <div class="row align-items-top justify-content-center">
        <div class="col-md-4 ml-2">
          <img class="img-fluid" src={`http://localhost:3000/${imageurl} `} style={{ padding: '20px' }} />
        </div>
        <div class="col-md-3">
          <form onSubmit={handleSubmit}>

            <div className="reply-container">
              <ChipInput
                value={reply.prescriptionReplies}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
              />
              <br />
              <div className="btn-group mt-2">
                <input type="submit" value="Submit" className="btn btn-primary" />
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn btn-secondary ml-1">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={modalToggle}
                  className="btn btn-info ml-1">
                  Search products
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      <Modal dialogClassName="modal-90w" show={modal} centered onHide={modalToggle} size="xl" scrollable>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Search products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductListAdmin reply={handleAddChip} />
        </Modal.Body>
      </Modal>

    </>

  );

}


