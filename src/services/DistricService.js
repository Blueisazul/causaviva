import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const DistrictService = {
    async GetDistrictService() {
        return axios.get(`${API_URL}/Distrito`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default DistrictService;