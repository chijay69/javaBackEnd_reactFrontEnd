import axios from "axios";

const USERS_REST_API_URL = "http://127.0.0.1:8080/api/users";

async function getUsers () {
    try {
        const response = await axios.get(USERS_REST_API_URL);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;