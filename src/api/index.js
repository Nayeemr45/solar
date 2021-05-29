import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });


export const sentData = (order) => API.post(`/contact` , order);
