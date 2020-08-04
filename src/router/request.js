import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  timeout: 6000
})

// service.interceptors.request.use(config => {
//   console.log(config)
// })
