import Axios from "axios";
const API_URL = "http://localhost:3000/users/"

class UserService {
    async update(data) {
        try {
            console.log("data", data);
            const response = await Axios.patch(
                `${API_URL}users/${data.id}`,
                data.data,
                {
                    headers: { Authorization: `${data.token}` },
                }
            );
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getAllUsers() {

        let url = `${this.API_URL}/users`;
        const response = await Axios.get(url);
        console.log(response);
        return response;
    }


}

export default UserService;