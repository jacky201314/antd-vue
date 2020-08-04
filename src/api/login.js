import axios from 'axios'

export default {
  login (parameter) {
    return axios({
      url: '/api/login/loginWeb',
      method: 'post',
      data: parameter
    })
  }
}
