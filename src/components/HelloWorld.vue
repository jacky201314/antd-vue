<template>
  <div class="hello">
    <el-form ref="form" :model="form" inline>
      <el-form-item label="用户">
        <el-input v-model="form.accountCode"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="平台">
        <el-input v-model="form.platformCode"/>
      </el-form-item>
    </el-form>
    <el-button @click="handleSubmit">登录</el-button>
  </div>
</template>

<script>
  import api from '../api/login'
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        accountCode: '',
        password: '',
        platformCode: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      api.getDefault(this.form).then(res => {
        console.log(res)

      })
    }
  }
}
</script>

<style scoped>
</style>
