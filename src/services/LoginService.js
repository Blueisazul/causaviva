import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const LoginService = {
    
    async OrganizationLogin(idUsuario) {
        return axios.get(`${API_URL}/SeguridadLogin/OrganizacionLogin?IdUsuario=${idUsuario}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async VolunteerLogin(idUsuario) {
        return axios.get(`${API_URL}/SeguridadLogin/UsuarioLogin?IdUsuario=${idUsuario}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },


};

export default LoginService;