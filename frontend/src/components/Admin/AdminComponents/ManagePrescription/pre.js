import { Component } from "react";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import ChipInput from "material-ui-chip-input";



export default function rr(props) {

  const initialState = {

    userId: "",
    firstName: "",
    imageUrl: "",
    prescriptionReplies: [],


  };
  const [reply, setReply] = useState(initialState);
  const navigate = useNavigate();
  const { _id } = useParams();
  useEffect(
    function () {
      async function getPrescription() {
        try {
          const response = await axios.get(`http://localhost:3000/prescription/pre/${_id}`);
          setReply(response.data.pre)
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
        await axios.patch(`http://localhost:3000/prescription/reply/${reply._id}`, reply);
        window.confirm("reply updated Succesfully")
        navigate(`/managePrescription`)
      } catch (error) {
        console.log(error);
      }
    }
    Updatereply();
  }


  function handleChange(event) {
    setReply({ ...reply, [event.target.name]: event.target.value })
  }

  function handleCancel() {
    navigate(`/managePrescription`)
  }
  function handleKeyDown(event) {
    if (["Enter", "Tab", ","].includes(event.key)) {
      event.preventDefault();
      setReply({ ...reply, [event.target.name]: event.target.value })

    }
  };
  function isInList(link) {
    return reply.prescriptionReplies.includes(link);
  }
  function handlePaste(event) {
    event.preventDefault();

    var paste = event.clipboardData.getData("text");
    var links = paste

    if (links) {
      var toBeAdded = links.filter(link => !isInList(link));

      setReply({
        prescriptionReplies: [...reply.prescriptionReplies, ...toBeAdded]
      });
    }
  };
  function handleDelete(item) {
    setReply({
      prescriptionReplies: reply.prescriptionReplies.filter(i => i !== item)
    });
  };



  return (
    <>
      <div className="{styles.reply-container}">
        <form onSubmit={handleSubmit}>
          {/* {reply.prescriptionReplies.map(item => (
          <div className="styles.tag-item" key={item}>
            {item}
            <button
              type="button"
              className="button"
              onClick={() => handleDelete(item)}
            >
              &times;
            </button>
          </div>
        ))} */}

          <div className="{styles.reply-container}">

            <input
              className="{styles.inputreply " name="prescriptionReplies"
              Value={reply.prescriptionReplies}
              type="text"

              placeholder="Type or paste email addresses and press `Enter`..."
              // onKeyDown={handleKeyDown}
              onChange={handleChange}

            />
            <div className="{styles.btn-group">
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




      </div>


      <img width="30%" class="img-fluid" src={`http://localhost:3000/${reply.imageUrl} `} />



    </>

  );

}


