import axios from 'axios';

const API_URL = 'https://localhost:7079/api';

const RegisterOrganizationService = {
    // Método GET para obtener datos de una organización
    // GetRegisterOrganizacionService(id) {
    //     return axios.get(`${API_URL}/${id}`);
    // },

    // Método POST para registrar una nueva organización
    // CreateRegisterOrganizationService(data) {
    //     return axios.post(`${API_URL}/Organizacion/Registrar`, data);
    // }, 

    async CreateRegisterOrganizationService(data) {
        return axios.post(`${API_URL}/Organizacion/Registrar`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // Método PUT para actualizar datos de una organización existente
    // UpdateRegisterOrganizacionService(id, data) {
    //     return axios.put(`${API_URL}/${id}`, data);
    // }
};

export default RegisterOrganizationService;
