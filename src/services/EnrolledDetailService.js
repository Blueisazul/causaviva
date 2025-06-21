import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const EnrolledDetailService = {

    async GetEnrolledDetailService(idVoluntario) {
        return axios.get(`${API_URL}/InscripcionVoluntariado/PanelOrganizacion?IdVoluntariado=${idVoluntario}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async UpdateStatusEnrolledService(data) {
        return axios.put(`${API_URL}/InscripcionVoluntariado/ActualizacionEstado`, data, {
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

export default EnrolledDetailService;
