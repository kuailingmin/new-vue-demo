import axios from './axios'
import apicom from './api'

const $api = {
    getLogin (data) {
        return axios.post(apicom.api.login, data)
      }
}

export default $api
