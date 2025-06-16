import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net';

const ProfileVolunteerService = {
    async GetProfileVolunteerService(idVoluntario) {
        return axios.get(`${API_URL}/Usuario/ID?IdUsuario=${idVoluntario}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async UpdateProfileVolunteerService(data) {
        return axios.put(`${API_URL}/Usuario/Actualizar`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    
    async UpdatePasswordVolunteerService(data) {
        return axios.put(`${API_URL}/Usuario/ActualizarContrasenia`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default ProfileVolunteerService;
