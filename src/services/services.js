import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kvadrantas/vuemastery1-Intro-to-VUE3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllEvents() {
        return apiClient.get('/events')
    },
    getEventDetails(id) {
        return apiClient.get('/events/' + id)
    }
}