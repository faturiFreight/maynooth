import axios from 'axios'

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        LOGIN: ({commit}, payload) => {
            console.log(payload);
            return new Promise((resolve, reject) => {
                axios.post(`http://192.168.1.95:3000/auth/login`, payload)
                .then(({data, status}) => {
                    if (status === 200) {
                        resolve(true);
                    }
                })
                .catch(error => {
                    reject(error);
                })
            })
        }
    }
}