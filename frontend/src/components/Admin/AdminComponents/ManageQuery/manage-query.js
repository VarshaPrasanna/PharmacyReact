import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './manage-query.css';

const ManageQuery = () => {

    const [message, setMessage] = useState([]);

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
                        {message.map((msg)=>{
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
                            data-toggle="modal"
                            data-target="#form"
                          >
                            Reply
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-reply-fill ml-1 mb-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                            </svg>
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
    <div
      className="modal fade"
      id="form"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="text-right cross" data-dismiss="modal">

            <i className="fa fa-times mr-2" />
          </div>
          <div className="card-body text-center">
            <div className="comment-box text-center">
              <h4>Post your Reply </h4>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="reply"
                      cols={30}
                      rows={5}
                      formcontrolname="reply"
                      defaultValue={""}
                    />
                    <div className="test">
                      <button type="submit" className="btn btn-primary mt-2">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )

}
export default ManageQuery;