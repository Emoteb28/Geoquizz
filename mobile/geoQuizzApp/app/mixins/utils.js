let localStorage = require( "nativescript-localstorage" );
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://e055643d.ngrok.io'
});

export const utils = {
    methods: {
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('login',{}, {
                    auth:
                        {
                            username: credentials.email,
                            password: credentials.password
                        }
                })
                    .then(response => {
                        const rtoken = response.data.token
                        localStorage.setItem('token', rtoken)
                        context.commit('retrieveToken', rtoken)
                        resolve(response)

                        console.log(response)
                        // context.commit('addTodo', response.data)
                    })
                    .catch(error => {
                        // console.log(error)
                        alert(error)
                        reject(error)
                    })
            })
        }
    }
}
