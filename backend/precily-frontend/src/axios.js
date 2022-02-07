import axios from 'axios'

const instance=axios.create({
    baseURL:'https://precily-web-app.herokuapp.com',
})

export default instance