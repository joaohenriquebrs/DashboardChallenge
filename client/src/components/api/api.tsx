import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Função para buscar reclamações com filtros opcionais
export const FetchComplaints = async (filters = {}) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/complaints`, { params: filters });
        return response.data.complaints;
    } catch (error) {
        throw error;
    }
};
