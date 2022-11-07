
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./reply.css";
import 'bootstrap/dist/css/bootstrap.css';
import ChipInput from "material-ui-chip-input";
import _, { map } from 'underscore';







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
  // function handleDelete(item) {
  //   setReply({
  //     items: reply.prescriptionReplies.filter(i => i !== item)
  //   });
  // };
  // // handleDelete = item => {
  // //   this.setState({
  // //     items: this.state.items.filter(i => i !== item)
  // //   });
  // // };


  function handleChange(event) {
    setReply({ ...reply.prescriptionReplies, [event.target.name]: event.target.value })
  }


  function handleCancel() {
    navigate(`/managePrescription`)
  }



  return (
    <>

      <form onSubmit={handleSubmit}>




        {/* <input
            className="inputreply " name="prescriptionReplies"
            value={reply.prescriptionReplies}
            type="text"
            placeholder="View links"
            onChange={handleChange}
          /> */}
        <div className="reply-container">

          <ChipInput
            value={reply.prescriptionReplies}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, index) => handleDeleteChip(chip, index)}
          />

          <div className="btn-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary">
              Cancel
            </button>

          </div>
        </div>
      </form>







      <img width="50%" class="img-fluid" src={`http://localhost:3000/${imageurl} `} />



    </>

  );

}


