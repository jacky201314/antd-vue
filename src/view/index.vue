<template>
    <div>
      <a-button @click="handleGo" type="primary" >Go</a-button>
    </div>
</template>

<script>
  import Router from '../router/index'
  export default {
    name: "index",
    methods: {
      handleGo () {
        this.$router.push({
          name: 'list'
        })
      }
    }
  }
</script>

<style scoped>

</style>
