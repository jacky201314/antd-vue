<template>
  <div>
<!--    <div v-for="item in routerList">-->
<!--      <span >{{item.meta.title}}</span>-->
<!--    </div>-->
    <a-tabs>
      <a-tab-pane v-for="(item,key) in routerList" :key="key" :tab="item.meta.title"></a-tab-pane>
    </a-tabs>
    <a-button v-if="token" type="primary" @click="handleLogout">退出</a-button>
    <span v-else>你还未登录</span>

  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import Router from '../router/index'
    export default {
      name: "Header",
      data () {
        return {
          routerList: [],
          activeKey: 1
        }
      },
      computed: {
        ...mapState({
          token: state => state.user.token
        })
      },
      created() {
        Router.options.routes.forEach(item => {
          if (item.meta.nav) {
            this.routerList.push(item)
          }
        })
        // this.routerList = Router.options.routes
      },
      methods: {
        ...mapActions(['Logout']),
        handleLogout () {
          this.Logout({}).then(()=>{
            window.location.reload()
          }).catch(error=>{
            console.log(error)
          })
        },
        handleSelect (key) {
          if (parseInt(key) === 1) {
            this.$router.push({
              path: '/'
            })
          }
          if (parseInt(key) === 2) {
            this.$router.push({
              path: '/list'
            })
          }
        }
      }
    }
</script>

<style scoped>

</style>
