import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const RegistrationService = {

    async GetRegistrationsService(idVoluntario) {
        return axios.get(`${API_URL}/InscripcionVoluntariado/PanelUsuario?IdUsuario=${idVoluntario}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    // Método POST para unirse a una propuesta como voluntario
    async CreateInscriptionVolunteerService(data) {
        return axios.post(`${API_URL}/InscripcionVoluntariado/Insertar`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default RegistrationService;
