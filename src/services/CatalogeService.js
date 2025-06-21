import axios from 'axios';

const API_URL = 'https://causaback-c2cvfxhqbjhdb7ea.eastus-01.azurewebsites.net/api';

const CatalogeService = {

    async GetCatalogeService(idVoluntariado) {
        return axios.get(`${API_URL}/VoluntariadoRequisito/VoluntariosPanelUsuarioID?IdVoluntariado=${idVoluntariado}`, {
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

export default CatalogeService;
