import axios from 'axios';

const api = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service' });

export default api;