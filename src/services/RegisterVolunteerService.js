import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const RegisterVolunteerService = {

    async CreateRegisterVolunteerService(data) {
        return axios.post(`${API_URL}/Usuario/Registrar`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
};

export default RegisterVolunteerService;
