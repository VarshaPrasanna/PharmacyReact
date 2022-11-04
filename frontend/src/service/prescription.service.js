import Axios from "axios";
const API_URL = "http://localhost:3000/prescription/"
const [prescription, setprescription] = useState([]);

class PrescriptionService {



    // 
    getAllPrescriptions = async () => {
        try {
            const data = await Axios.get(
                "http://localhost:3000/Prescription/"
            );
            console.log(data.data);
            console.log(data.data.pre)
            setprescription(data.data.pre);
        } catch (e) {
            console.log(e);
        }
    };
    //Delete Prescriptions
    removePrescription = (id) => {
        if (window.confirm("Are you sure?")) {
            Axios.delete("http://localhost:3000/prescription/" + id)

                .then(console.log("Deleted"))
                .catch(err => console.log(err));
        }
    }




    async getAllPrescriptions() {

        let url = `${this.API_URL}`;
        const response = await Axios.get(url);
        console.log(response);
        return response;
    }
    // async getPrescription(id) {
    //     let url = `${this.API_URL}/${id}`;
    //     const response = await Axios.get(url);
    //     console.log(response);
    //     return response;


    // };





}

export default PrescriptionService;