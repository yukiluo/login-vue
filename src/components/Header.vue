<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/userInfo">User Info</router-link>
    <!--透過render 不重整頁面，改變路由、滑順的mount元件上去-->
    <a href="" @click.prevent="logout">Logout</a>
  </div>
</template>
<script>
  export default {
    methods: {
      logout(){
        localStorage.removeItem('token'); 
        // 刪除token
        this.$router.push('/login');
      }
    }
  }
</script>