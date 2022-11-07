import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Prescription() {

    const [prescription, setprescription] = useState([]);
    const [replyUrl, setreplyurl] = useState({
        prescriptionReplies: []
    });

    const getAllPrescriptions = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/Prescription/" + userId
            );
            console.log(data.data);
            console.log(data.data.pre)
            console.log(data.data.pre[0].prescriptionReplies)
            setreplyurl(data.data.pre[0].prescriptionReplies)
            setprescription(data.data.pre);
        } catch (e) {
            console.log(e);
        }
    };

    //Delete user
    const removePrescription = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3000/prescription/" + id)

                .then(console.log("Deleted"))
                .catch(err => console.log(err));
        }
    }



    useEffect(() => {
        getAllPrescriptions();
    }, []);


    // 


    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const firstName = localStorage.getItem('userName')
    const [prescriptionImage, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const prourl = "/Myprofile"

    console.log(firstName, prescriptionImage, 12)

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate('/')
        }
    }, {})


    const submit = () => {
        navigate('/prescription')
        const formdata = new FormData();
        formdata.append('firstName', firstName);
        formdata.append('userId', userId);
        formdata.append('prescriptionImage', prescriptionImage);
        axios.post("http://localhost:3000/prescription/", formdata)

            .then(res => { // then print response status
                console.warn(res);
                console.log(res.data.savedPrescription.imageUrl + '.jpg')
                console.log(imageUrl)
                return imageUrl = res.data.savedPrescription.imageUrl + '.jpg'




            })
    }

    return (
        <div className="container mr-60">
            <div className="formdesign">
                <div className="form-row">
                    <input type="text" className="form-control" value={firstName}></input>
                    <label className="text-white">Select Image :</label>
                    <input multiple type="file" className="form-control" name="upload_file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="form-row">
                    <button type="submit" className="btn btn-dark" onClick={() => submit()} > Upload Prescription </button>
                </div>
                <div>

                </div>

            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card  ">
                            <div class="card-body">

                                <div class="table-responsive">

                                    <table class="table table-striped  table-borderless" align="center">
                                        <thead background-color="blue" class="thead">
                                            <tr>
                                                <th scope="col">Prescription</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Your Medicines</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {prescription

                                                .map((item) => {
                                                    return (
                                                        <tr >

                                                            <td><img width="50%" src={`http://localhost:3000/${item.imageUrl} `} /></td>
                                                            <td>{item.date.slice(0, 10)}</td>

                                                            <td><a>{replyUrl}</a></td>



                                                            <td> <Link className="nav-link" to={prourl}>Prescription</Link></td>
                                                            <td>
                                                                <a role="button" onClick={() => removePrescription(item._id)}
                                                                    class="btn btn-danger">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                        fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd"
                                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </a>


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
                </div >
            </div >

        </div>
        ///////



    );

}

export default Prescription;