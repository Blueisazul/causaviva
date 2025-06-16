import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const RegisterOrganizationService = {

    async CreateRegisterOrganizationService(data) {
        return axios.post(`${API_URL}/Organizacion/Registrar`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
};

export default RegisterOrganizationService;
