<template>
    <div class="hello">
      <a-form-model ref="ruleform" :rules="rules" :model="ruleform" layout="inline">
        <a-form-model-item label="用户" prop="accountCode">
          <a-input v-model="ruleform.accountCode"/>
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input type="password" v-model="ruleform.password"/>
        </a-form-model-item>
        <a-form-model-item label="平台" prop="platformCode">
          <a-input v-model="ruleform.platformCode"/>
        </a-form-model-item>
      </a-form-model>
      <a-button type="primary" @click="handleSubmit">登录</a-button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        ruleform: {
          accountCode: '',
          password: '',
          platformCode: ''
        },
        rules: {
          accountCode: [{ required:true}],
          password: [{ required:true}],
          platformCode: [{ required:true}],
        }
      }
    },
    methods: {
      ...mapActions(['Login','Logout']),
      handleSubmit () {
        this.$refs.ruleform.validate((valid) => {
          if (valid) {
            const {
              $router,
              Login
            } = this
            Login(this.ruleform).then(() => {
              $router.push({ path: '/' })
            }).catch(error=>{
              this.$message({message:error, type: 'error'})
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
